/*
  Program made for Arduino Yun - VELLA CYRIL
  DO NOT SHARE

  2017 - Copyright - DrinkIT
*/

#include <Bridge.h>
#include <BridgeServer.h>
#include <BridgeClient.h>

BridgeServer server;

void setup() 
{
  int moteur1;
  int moteur2;
  int dosage1;
  int dosage2;
  
  Bridge.begin();
  server.begin();
}

void loop() {
  BridgeClient client = server.accept();
  if (client) {
    process(client);
    client.stop();
  }
  delay(50);
}

void process(BridgeClient client) {
  String command = client.readStringUntil('/');

  if (command == "make") {
    getBoisson(client);
  }
}


void getBoisson(BridgeClient client) {

  int motor, motor2, dosage, dosage2;

  motor = client.parseInt();
  
  if (client.read() == '/') {
    motor2 = client.parseInt();
    dosage = client.parseInt();
    dosage2 = client.parseInt();

    int final = dosage * 10;
    int final2 = dosage2 * 10;
  
    digitalWrite(motor, HIGH);
    delay(final);
    digitalWrite(motor, LOW);
    digitalWrite(motor2, HIGH);
    delay(final2);

  }
}
