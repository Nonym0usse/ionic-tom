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
  int motor2;

  if (command == "make") {
    getBoisson(client);
  }
}

void setHeaders(BridgeClient client){
  //adding headers
  client.println(F("Status: 200"));
  client.println(F("Access-Control-Allow-Origin: *"));
  client.println(); //mandatory blank line
}

void getBoisson(BridgeClient client) {

  int motor, motor2, dosage, dosage2;

  int motor, motor2, dosage, dosage2;

  motor = client.parseInt();
  motor2 = client.parseInt();
  
  if (client.read() == '/') {
  Serial.print(motor);
  Serial.print('\n');
  Serial.print(motor2);

  }else{
    Serial.print("error");
  }
}
