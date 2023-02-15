import { Chrono } from "react-chrono";
import { Link } from "react-router-dom";
// import '../App.scss'

export const History = () => {
  return (
    <main>
      <div className="container">
      <h1>Our History</h1>
      <p>In these years</p>
      </div>
      <Chrono
  items={[
  {
    title: "24 Enero 2021",
    cardTitle: "El Parcial",
    cardSubtitle:
      "Un simple parcial que nos hizo conocernos",
    cardDetailedText: `El parcial de la materia de Programacion fue el primer contacto que tuvimos, nunca habiamos hablado antes, cuando me dijeron que iba a escribirme una chica pense en cambiar mi foto de perfil de whatsapp, para que pudiera verme, pero no lo hice, y la conversasion fue muy seria y profesional inicialmente, de hecho solo hablamos del parcial del monto que iba a cobrarle y no volvimos a hablar hasta despues de completar el parcial, pero justo ese dia algo paso y crecio un interes tan mutuo por saber cosas uno del otro y empezamos a hablar de lo que sea como si teniamos mucho tiempo de concernos, se creo una conexion que realmente nunca habia tenido, nunca habia sentido que alguien se interesara tanto desde el minuto uno...`
  },
  {
    title: "11 Febrero 2021",
    cardTitle: "La Hora de la Verdad",
    cardSubtitle: `La primera vez que nos vimos, por culpa de un cable`,
    cardDetailedText: `despues de entregar el parcial comenzamos a hablar a diario, casi a toda hora incluso nos desvelabamos por chat, en este punto ambos sabiamos que se empezaba a generar una atraccion muy fuerte, pero nunca nos habiamos visto, entonces ella comento que su computadora se habia averiado rapidamente yo sugeri que conocia un lugar donde podiamos comprar lo que ella necesitaba, y ese dia fue el 11 de febrero, nos encontramos en el famoso "pollo campero del centro" ella llego tarde, recuerdo que estaba nervioso, no sabia de que lado de la calle quedarme o hacia donde mirar, asi que busque donde habia sombra y la espere como 6 minutos, cuando ella llego no sabia como saludarla estaba muy nervioso asi que solo dije hola, ella dijo hola y comenzamos a caminar y platicar,
    copramos el cable como en 10 minutos y salimos del lugar, yo seguia nervioso y no estaba acostumbrado a andar por esos lugares, (en esos tiempos casi no salia xd) entonces ella sugirio si ibamos por un helado y asi lo hicimos, recuerdo que nos sentamos frente a frente y comenzamos a hablar, no recuerdo muy bien que hablamos yo estaba viendola y ambos hicimos fotos del otro sin que se diera cuenta, fue un momento agradable la atraccion e interes continuaba en ambas partes`
  },
  {
    title: "14 Febrero 2021",
    cardTitle: "Primera cita",
    cardSubtitle: `Decidi invitarla a salir el 14 de febrero, fuimos por papas`,
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/82bcd7c3-6a8c-43e0-ad74-63a187f15a9e.jpg?alt=media&token=21d9bf4d-0dae-48c0-b993-8f61bd5c87a7"
      }
    },
    cardDetailedText: `solo nos habiamos visto una vez, habia atraccion pero nadie habia dicho explicitamente sus intenciones, esta salida era importante habia que de alguna forma u otra dejar claras las intenciones
    o almenos empezar a indicar a donde queria llegar, se llego el dia y como ambos estabamos ocupados durante el dia decidimos hacerlo de tarde, pero yo tuve un retraso y la llame para decirle que llegaria tarde, ella me dijo que no habia problema, asi que llegue a las 5:40 y ella ya estaba esperandome
    ella me dijo que me estaba esperando con un vestido rojo, yo me quede sorprendido porque ella no sabia donde iriamos y pense ella se arreglo y yo donde la llevare xd, pero resulta que era una broma, ella decidio llevar un outfit mas tranqui, desapercibido supuse que fue para no ser tan obvia con sus intenciones o simplemente porque para ella era algo tranqui de amigos no lo se, ese dia decidi llevarle un pequeno regalo un llaverito para que notara que si me pense en ella`
  },
  {
    title: "Febrero - Marzo 2021",
    cardTitle: "Llamadas & Videollamadas",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/95d8e394-bcf8-4ba1-97e0-7461a3024424.jpg?alt=media&token=ba489fcb-7fd1-4eae-9f6c-a880c1b56a19"
      }
    },
    cardSubtitle: `Hablabamos todo el tiempo y ahora tambien en videollamadas`,
    cardDetailedText: `Yo no soy una persona de videollamadas pero con ella sentia que conectabamos mejor de esa forma, nos contabamos nuestro dia y hablabamos de tantas cosas todo el tiempo que empezamos a vernos ya no tan arreglados, en pijama, en camiseta, sin banarse AHAH, pero eso ayudo a que la confianza creciera`
  },
  {
    title: "4 Julio 2021",
    cardTitle: "My Birthday Celebration",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/64f4ba8e-d7b7-4cfe-9948-d757edbe3a5d.jpg?alt=media&token=043f0d21-b769-49bf-b15f-680a3d78b4e8"
      }
    },
    cardSubtitle: `Tu plan para celebrar mi cumpleaños`,
    cardDetailedText: `Ese dia fue muy especial para mi, ella me habia dicho que me iba a sorprender, pero no sabia que tan especial seria, ella me dijo que me iba a llevar a un lugar que me iba a encantar, ella me llevo a un lugar que me hizo sentir muy especial, un lugar que me hizo sentir muy feliz, pero realmente no era el lugar, era ella, ese dia ella lo planeo muy genial incluso acelero mis latidos AHAH, en ese tiempo usaba una smartband que contaba el ritmo cardiaco entonces ella me beso y mis latidos se aceleraron, por todo lo que estaba sintiendo, nunca lo olvidare`
  },
  {
    title: "Julio - Agosto 2021",
    cardTitle: "La Stalkeada",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/9b9a36ef-e361-47e6-a2af-cfa99f8a9bb8.jpg?alt=media&token=1d6f0903-f619-4486-b85b-275b7a2a3ee3"
      }
    },
    cardSubtitle: `Ambos habiamos stalkeado al otro pero sin reaccionar...`,
    cardDetailedText: `Durante esos meses pasaron mas cosas que incluso stalkear, se construyo realmente una relacion entre ambos, se fundaron las bases de la confianza y todo lo que tenemos, continuabamos hablando de todo, me mandaba fotos de lo que hacia y yo a ella, ** btw tengo pruebas que ella se moria por darle me encanta a este papucho JAJAJAJAJAJ`
  },
  {
    title: "Septiembre - Octubre 2021",
    cardTitle: "El amor",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/33e0af84-ae89-4011-9416-363e0df02022.jpg?alt=media&token=1e9c9a6c-d1c4-40ba-b0b7-ae6b99f1c003"
      }
    },
    cardSubtitle: `Mariela Alejandra enamorada de un bicho yamado quevin JAJAJAJAJ`,
    cardDetailedText: `La verdad no era solo Mariela, ambos sentiamos algo muy especial por el otro y lo demostrabamos compartiendo mucho tiempo juntos, teniamos muchas salidas con cualquier excusa, empezamos a ir al gym juntos, ibamos al cine, teniamos citas dobles con emanuel, en general demostabamos constantemente el interes hacia el otro`
  },
  {
    title: "Noviembre - Diciembre 2021",
    cardTitle: "El cumple de la Reina",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/IMG_0434.jpeg?alt=media&token=a755e76f-4ca7-49e9-8492-438f8647001d"
      }
    },
    cardSubtitle: `Mariela Alejandra cumple 21`,
    cardDetailedText: `el 19 de noviembre fue su primer cumple, despues de conocernos, sabia que debia esforzarme porque ella habia estado mas que a la altura en el mio, asi que salimos a comer y platicar y como dice la chaviza ese dia "yo facture :$"
    luego de ese dia salimos muy seguido, y ella venia a mi casa tambien, fuimos a nadar, y conocimos restaurantes y lugares juntos`
  },
  {
    title: "Q1 2022",
    cardTitle: "Varias citas",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/IMG_3115.JPG?alt=media&token=c6943d02-76f4-4f3a-969f-bf65067fef93"
      }
    },
    cardSubtitle: `Que viva el amor`,
    cardDetailedText: `Conforme  pasaba el tiempo no parabamos de salir, saliamos semana a semana y no nos cansabamos de hablar de estar juntos, establecimos una conexion tan profunda en los meses que nunca se volvio monotono, siempre encontrabamos algo de que hablar, nunca se perdio la conexion`
  },
  {
    title: "Q2 2022",
    cardTitle: "Esa miradaaaaa",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/IMG_3219.JPG?alt=media&token=29415735-082b-4266-a5ce-deaea8a3b128"
      }
    },
    cardSubtitle: `Quedate con quien te vea como...`,
    cardDetailedText: `ese dia fuimos a comer pizza, recuerdo que ambos ya habiamos almorzado pero aun asi nos vimos para comer y comer bien AHAHA, recuerdo que me gusto mucho como se veia con ese vestido`
  },
  {
    title: "20 Noviembre 2022",
    cardTitle: "EL CUMPLEAÑOS",
    media: {
      type: "IMAGE",
      source: {
        url: "https://firebasestorage.googleapis.com/v0/b/valentine-project-dev.appspot.com/o/IMG_4943.jpeg?alt=media&token=e7c76a44-155e-48f1-b020-fdddbc96b64e"
      }
    },
    cardSubtitle: `Marielita cumplia 22`,
    cardDetailedText: `anteriormente nunca habiamos salido lejos, no tenia carro, pero en ese tiempo las cosas empezaron a irme bien asi que decidimos ir a la playa, fue un dia muy bonito, nos bañamos, comimos, jugamos, nos tomamos fotos, fue un dia muy bonito`
  },
  {
    title: "Actualidad",
    cardTitle: "Te quiero",
    cardSubtitle:
      "Dos años de amor, de confianza, de amistad, de compañia, de todo",
    cardDetailedText: `Desde aquel enero del parcial hasta hoy, han pasado muchas cosas, literalmente parece telenovela, hay algunas en las que aun trabajamos por superar, pero en general creo que en los ultimos meses hemos mostrado una cara diferente a lo que soliamos ser, personalemente creo que he madurado en ciertas cosas, aveces quiza actuamos raro pero
    parece asi porque son etapas que aun no conocemos bien del otro y podemos dudar o pensar mal, pero este dia no hablaremos de esas cosas que tenemos pendientes, este dia vamos a pasarla de lo mejor y  disfrutar la compañia de la persona que siempre me ha apoyado en todo

    TE QUIERO M A R I E L A`
  }]}
  mode="VERTICAL_ALTERNATING"
  theme={{
    primary: '#FF00FF',
    secondary: 'white',
    cardBgColor: '#6c63ff',
    cardForeColor: 'white',
    titleColor: 'white',
    titleColorActive: 'black',
  }}
/>
  <div className="container">
  <Link to='/'><h1>Volver 👈🏻</h1></Link>
  </div>
  </main>
  )
}
