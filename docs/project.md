##Progetto Grafica Computazionale 2015 

realizzato da Perrone Stefano

Il progetto è incentrato sulla realizzazione di un modello 3D fotorealistico di una struttura ospedaliera, con modellazione di oggetti caratteristici per ogni reparto. 

Vediamo in dettaglio i reparti realizzati: 

| __Numero__ | __Descrizione__ |
| ------ | ------ |
|   1   | Staff Dinning |
|   2   | CSSD |
|   3   | House Keeping |
|   4   | Central Staff Changing |
|   5   | Central Store |

-----------------------------------------------------------

I dati di partenza sono le dimensioni degli ambienti, ricavati utilizzando il programma Illustrator sulla planimetria riportata nell'immagine successiva

![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/plan1.png?raw=true)

--------------------------------------------------------------------

Il primo passo nella realizzazione del progetto è stato, a partire dal file in formato svg, la realizzazione del modello, andando a creando i muri perimetrali degli ambienti, per poi suddividerli internamente a seconda delle esigenze di utilizzo, ed aggiungendo i punti di accesso agli stessi, ottenendo il risultato riportato in figura

![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/plan2.png?raw=true)

---------------------------------------------------------------


##Staff Dining

Le mense ospedaliere per il personale sono delle grandi aree di solito a pianta aperta, principalmente suddivise in due zone: 

- preparazione degli alimenti
- servizio degli alimenti

Nella prima zona gli oggetti modellati sono:

- cucina (Cucina.js)
![immagine](http://www.domstore.it/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/o/lofra-cucina-gas-plg96gvt-c.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/cucina.png?raw=true)

- frigorifero (Frigo.js)
![immagine](http://www.gruppoincasso.it/prodotti/050920121209195373_pic.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/frigo.png?raw=true)

- bancone (Banco.js)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/bancone.png?raw=true)

- bancone con lavandino (BancoLavandino.js)
![immagine](http://www.macchineprofessionali.it/images/stories/virtuemart/product/studio12/lavarm2pssx.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/banconelavandino.png?raw=true)

Nella seconda zona gli oggetti modellati sono:

- vassoio (Vassoio.js)
- bicchiere (Bicchiere.js)

- tavolo con quattro posti a sedere (TavoloMensa.js)
![immagine](http://www.supino.it/images/prodotti/ufficio/accessori-ufficio/tavoli-pieghevoli/tavoli-mensa-ufficio-06.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/tavolomensa.png?raw=true)

- espositore alimenti (Espositore.js)
![immagine](http://www.herrmann-grosskuechen.de/root/img/pool/hhlkr_referenzen/UKE_Mensa/1_Salatausgabe_gross.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/espositore.png?raw=true)

- carrello raccolta vassoi (CarrelloMensa.js)
![immagine](http://img4.annuncicdn.it/40/fc/40fc872d644c6161dc91bfe3ded96215_orig.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/carrellomensa.png?raw=true)

- cestino (CestinoMensa.js)
![immagine](http://www.tuttoscaffali.it/eshop/components/com_virtuemart/shop_image/product/svuota-vassoi_701.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/cestino.png?raw=true)

- distributore bevande (Distributore.js)
![immagine](http://acqualys.foreach.it/erogatori/wp-content/uploads/2015/04/acqualys-c1.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/distributore.png?raw=true)


------------------

##CSSD

 Central Sterile Services Department (CSSD) è un luogo integrato negli ospedali e altre strutture sanitarie che esegue la sterilizzazione e altre azioni sui dispositivi medici, attrezzature e materiali di consumo; per il successivo utilizzo da parte di operatori sanitari in sala operatoria dell'ospedale e anche per altre procedure asettiche.

 Le operazioni consistono solitamente di pulizia dei dispositivi utilizzati in precedenza, come utensili in acciaio inox, con un liquido sterilizzante. Dopo essiccamento del dispositivo su un supporto (non a mano o un panno) Viene avvolto in un sacchetto di carta speciale (chiamato un sacchetto aseptor), nastro sigillato e poi sterilizzata mediante gas o in autoclave a vapore. Una data di scadenza viene scritta sulle apparecchiature o sugli oggetti di consumo che sono inpacchettati, prima di essere consegnato all'utente finale come prodotto sterile. Il processo svolto è facilmente suddividibile in tre fasi come riporato nella figura seguente

![immagine](https://scontent-mxp1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11141212_10207139322749516_3412986643814775532_n.jpg?oh=903e80cc43154fbe25d64dbd44d20889&oe=56514A8F)

- Nella prima fase la strumentazione viene lavata prima immergendoli in un liquido di sterilizzazione e poi viene messa negli sterilizzatori a vapore ad alta temperatura
- Nella seconda fase la strumentazione sterilizzata viene impacchettata 
- Nella terza fase vengono immagazzinate

Gli oggetti modellati per l'ambiente:
- sterilizzatore a vapore (Sterilizzatore.js)
![immagine](http://www.gilbert-ash.com/databaseImages/prd_1165996__critical_care_washers.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/sterilizzatore.png?raw=true)

- bancone (Banco.js)
![immagine](http://fotostore.aruba.it/fotoalbum_automaticlavello_it/Data/0ca827c72b/d0f1d20b7d0.JPG)

- bancone con lavandino (BancoLavandino.js)
- scaffali (Scaffale.js)
- carrelli (Carrello.js)

-------------------------------------

##House Keeping

Pulizia e disinfettazione negli ospedali può prevenire la diffusione di malattie infettive. Inoltre, i dirigenti ospedalieri devono lavorare per aderire ai regolamenti statali e regionali sanitari per garantire un ambiente igienico, sicuro e sano. Le persone che riempiono le posizioni di pulizia negli ospedali devono avere l'impegno e la capacità di coordinare con gli altri membri del team e gestire in modo efficiente gli spazi per servire al meglio i pazienti.

I dipendenti sono dotati di diverse attrezzature, il più comune è il carello delle pulizie come quello riportato in figura. Inoltre hanno in dotazione macchinari scopatura ad umido dei pavimenti e aspirazione meccanica di tappeti e lavaggio dei pavimenti. 

Gli oggetti modellati per l'ambiente:
- carrello delle pulizie (CarrelloPulizie.js)
![immagine](http://www.acquistiverdi.it/sites/default/files/imagecache/Original_confirma/images/prodotti/carrello_multiuso_alpha_filmop_0.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/carrellopulizie.png?raw=true)

- lucidatrice pavimenti (Lucidatrice.js)
![immagine](http://i00.i.aliimg.com/photo/v0/60169008106_1/Hospital_Floor_Cleaning_Machine_Cart_Battery_Type.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/lucidatrice.png?raw=true)

- segnale pavimento bagnato (Segnale.js)
![immagine](http://ecx.images-amazon.com/images/I/31eb8t7s%2BzL.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/segnale.png?raw=true)

------------------------------------

##Central Staff Changing

Lo spogliatoio ospedalieri consente allo staff il cambio d'abiti e l'utilizzo dei servizi igenici. Nel recente passato ha subito le più radicali modifiche. 
Si è passati da locali arredati genericamente con armadietti in lamiera verniciata ad aree qualificate caratterizzate da elementi di arredo dalle precise caratteristiche. Dal tradizionale armadietto metallico, caratterizzato da finiture approssimative, vani soggetti a raccogliere polvere e sporcizia si è passati ad evolutissime attrezzature realizzate con materiali di altissima qualità, ma soprattutto assolutamente inossidabili ed autoestinguenti: laminato massello HPL per fianchi, fondi, ripiani ed ante, alluminio anodizzato per i profili portanti e per le cerniere, acciaio inossidabile e nylon per serrature e finiture.

Non più un unico vano per abiti civili e camici ma due vani verticali separati che presentano alla base uno spazio per le calzature, ed in alto un ripiano su cui appoggiare strumenti od oggetti personali.
Ma c’è di più. Il tradizionale ripiano terminale orizzontale di chiusura è stato sostituito da un pannello inclinato per facilitare l’igienizzazione e per evitare che sopra l’armadietto possa accumularsi polvere o possano essere sistemati oggetti, indumenti o quant’altro.
Un notevole rialzo del vano armadietto da terra consente, negli spogliatoi sanitari, di facilitare e di rendere efficienti le operazioni di pulizia e di sanificazione del pavimento.
Infine i materiali utilizzati non sono soggetti ad ammaccarsi, a rigarsi, a deteriorarsi nel tempo e possono essere trattati, senza alcun problema, con detersivi e disinfettanti di qualsiasi tipo.
La sicurezza d’uso è garantita dall’assoluta mancanza di parti taglienti o da spigoli vivi come invece accade nelle tipologie in lamiera piegata e saldata.

Per facilitare aerazione e igienizzazione gli armadietti per gli spogliatoi sanitari presentano fessure sulle ante e sul perimetro dei ripiani, quest’ultima caratteristica per facilitare l’eventuale fuoriuscita dei liquidi di lavaggio.
Anche nel settore delle panchine per spogliatoi si sono introdotte innovazioni di grande rilievo. Al posto delle tradizionali panche con struttura in ferro verniciato e doghe in legno, soggette a scheggiarsi e non igienizzabili oltre che combustibili sono state introdotte tipologie in alluminio anodizzato, laminato massello, nylon ed acciaio inossidabile, con soluzioni tecniche d’avanguardia.


Gli oggetti modellati per l'ambiente
- armadietto (Armadietto.js)
![immagine](http://www.gesgroup.it/wp-content/uploads/2013/05/ARMADI_Variante_L_TI_01-448x238.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/armadietto.png?raw=true)

- panca (Panca.js)
![immagine](http://www.tuttoscaffali.it/eshop/components/com_virtuemart/shop_image/product/PF_LE_M_1500.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/panca.png?raw=true)

- water (Water.js)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/water.png?raw=true)

- lavandino (Lavandino.js)
![immagine](http://img.archiexpo.it/images_ae/photo-g/lavabo-sospeso-rotondo-moderno-50347-3515619.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/lavandino.png?raw=true)

- asciugamani (Asciugamani.js)
![immagine](http://www.cetishop.it/public/foto/MG88P-B-LEM.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/asciugamani.png?raw=true)

- rotolo carta igenica (RotoloCarta.js)


---------------------------------------------------------------------

##Central Store (Central Unit)

E' il luogo dove vengono immagazzinati tutti gli strumenti ospedalieri. E' un ambiente a pianta aperta con grandi corridoi di scaffali. Note le grandi dimensioni di questo ambiente, per semplificare la ricerca degli oggetti disponibili nel magazzino, è presente un sistema informatico.

![immagine](http://www.montichiari.spedalicivili.brescia.it/upload/spedalicivili_brescia/gs_fornitori/IMG_1896_14432_643.JPG)

Gli oggetti modellati per l'ambiente:
- scaffali (Scaffali.js)
![immagine](http://www.scaffali.biz/images/lo_scaffale.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/scaffale.png?raw=true)

- monitor desktop (MonitorPc.js)
- torre desktop (TorrePc.js)
![immagine](http://www.desktop-driver.com/wp-content/uploads/2013/03/Dell-Dimension-5150-450x337.jpg)
![immagine](https://github.com/Stepex90/cg2015-final-project/blob/master/docs/pc.png?raw=true)

---------------------------------------------------------------------------