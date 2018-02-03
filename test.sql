-- CALCUL AGREGAT --

-- TEMPS DE PARCOURS EN SECONDES  --
CREATE OR REPLACE FUNCTION FUNCTION timeInSecond(vtemps in date) return number IS
vnbSeconde number (6);
BEGIN
vnbSeconde:=to_char(vtemps, 'HH24')*3600+
to_char(vtemps, 'MI')*60+
to_char(vtemps, 'SS');
RETURN vnbSeconde;
END;
-- CONVERSION TEMPS SECONDES EN STRING --
CREATE OR REPLACE FUNCTION timeHHMISS(vsecondes in number) return CHAR IS
vseconde number;
vheure number:=0;
vminute number:=0;
vretour varchar(200);
BEGIN
vseconde:=vsecondes;
while (vseconde>=3600) loop
vheure:=vheure+1;
vseconde:=vseconde-3600;
end loop;
while (vsecond >= 60)loop
vminute:=vminute+1;
vseconde:=vseconde-60;
end loop;
vretour:=vheure||':'||vminute||':'||vseconde;
return vretour;
END;

-- CLASSEMENT GENERAL INDIVIDUEL --

SELECT coureurs.dossard, coureurs.nom
FROM resultats, coureurs
WHERE resultats.coureur=coureurs.dossard
AND coureurs.dossard NOT IN (select dossard
from coureurs
where dossard not in(
select coureur from resultats where etape=(select max(etape from resultats)))
GROUP BY coureurs.dossard, coureurs.nom
ORDER BY sum(timeInSecond(temps)) ASC;

-- CLASSEMENT GENERAL EQUIPE --

SELECT coureurs.equipe from resultats, coureurs where resultats.coureur=coureurs.dossard
GROUP BY coureurs.equipe
ORDER BY sum(timeInSecond(temps)) ASC;

-- LANTERNE ROUGE --

SELECT coureurs.dossard, coureurs.nom
FROM resultats, coureurs where resultats.coureur = coureurs.dossard
AND coureurs.dossard NOT IN (select dossard from coureurs where dossard not in (
select coureur from resultats
where etpae = (select max(etape) from resulats )))
GROUP BY coureurs.dossard, coureurs.nom
ORDER BY sum(timeInSecond(temps)) DESC;
