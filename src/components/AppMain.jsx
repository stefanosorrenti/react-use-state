import { useState } from "react" //Importo react hooks

export default function AppMain() {


    /* DATA */

    const languages = [
        {
            id: 1,
            title: "HTML",
            description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
        },
        {
            id: 2,
            title: "CSS",
            description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
        },
        {
            id: 3,
            title: "JavaScript",
            description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
        },
        {
            id: 4,
            title: "Node.js",
            description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
        },
        {
            id: 5,
            title: "Express",
            description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
        },
        {
            id: 6,
            title: "ReactJS",
            description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
        }
    ]  //Array d'oggetti 


    

    const [classe, setClasse] = useState('d-none') //Destruttura lo il mio useState: Il primo elemento è la variabile di stato
    const [count, setCount] = useState(0) //Destruttura lo il mio useState: Il primo elemento è la variabile di stato








    return (

        /* Main */
        <main>
            <div className="buttons container">

                {languages.map((lang, index) => ( /* Uso il map per ciclare e restituire degli elementi secondo la mia logica */

                    /* Per ogni iterazione aggiungi un tag button */
                    <button key={lang.id} onClick={() => {  //Aggigungo una proprs che ascolta quando il bottono viene cliccato
                        
                        setCount(index) //Se il bottone viene cliccato imposta la variabile di stato 'count' assueme lo stesso valore dell'index
                        setClasse('') //Se il bottone viene cliccato imposta la variabile di stato 'Classe' assueme lo stesso valore di una stringa vuota

                        /* console.log(lang.id, count) */


                    }}>{lang.title}</button> //Il bottone deve avere la proprieta title di del rispettivo oggetto iterato



                ))}
            </div>



            {/* Card Section */}
            <section className="container">

                {/* Aggiungo una condizione un operatore TERNARIO */}
                <div className={classe === '' ? 'd-none' : 'card'}> {/* Se la mia variabile di stato 'classe' ha è uguale ad una stringa vuota la classe di questo div diventa 'd-none */}
                    <h2>Nessun Linguaggio Selezionato</h2>
                </div>

                <div className={`card ${classe}`}> {/* Interpolo la classe con il template literal la variabile di stato 'classe' (che di base ha equaivale a 'd-none')  */}

                    <h2>{languages[count].title}</h2>  {/* Il contenuto di questi tag corrisponde alle chiavi degli elementi all'interno del mio array, , l'indece dell'elemento cambia dinamicamnete */}
                    <p>{languages[count].description}</p>
                </div>


            </section>
            
            
        </main>

    )

    
    

}


