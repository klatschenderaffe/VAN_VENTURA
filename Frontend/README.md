Wir haben eine Camperapp erstellt die es Campern ermöglicht, auf ihrer Reise verschiedene Schlafplätze rauszusuchen.
Mit einer Karte mit Hilfe von Mapbox sind die Plätze ersichtlich.

# VanVentura - Camperapp mit Routenplaner
- Wir haben uns ein Projekt überlegt in dem wir alle schon Erfahrungen gesammelt haben.
- Ein Name war schnell gefunden.

## Länder Dokumentation
- Wir haben 8 Länder zur Auswahl genommen( Österreich,Polen,Schweiz,Luxemburg,Niederlande,Belgien,Tschechien,  Dänemark) 
- Informationen zu den Ländern wurden rausgesucht
( Regeln zum Campen, Wildcampen und Freistehen, Strafen),

### Es wurde eine Karte mit Hilfe von Mapbox erstellt
- Es wurde auch eine Karte erstellt mit verschiedenen Schlafplätzen.

#### Projektstruktur
frontend/: Enthält den Quellcode der Anwendung.
    public/: Alle für den Browser relevanten Daten.
    src/: Seitenkomponenten der Anwendung.
        assets/: Bilder, Icons und Logos welche Benutzt wurden
        components/: Wiederverwendbare React Komponenten
        App.js: Das Herz der Website.
data/: Enthält die Schlafplätze für die Mapbox Karte.
    sleepspots.json/: Die Schlafplätze im JSON Format gespeichert.