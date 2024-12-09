import styles from './santa-modal-day-11.module.scss';

export default function ModalDay11() {
  return (
    <div className={styles.textContainer}>
      <p className={styles.title}>🎬 Le Burdigala fait son cinéma 🎥</p>
      <div className={styles.descriptionActivity}>
        <p>
          C’est dans l’ambiance feutrée et cosy de notre salle de cinéma de 18
          places, un lieu unique à Bordeaux, que nous vous invitons à découvrir
          ou redécouvrir un de vos films préférés. Installé confortablement,
          votre séance inclut :
        </p>
        <p>- 1 boisson par personne (soft, petite bière ou verre de vin) </p>
        <p>- 1 cornet de popcorn par personne </p>
        <p>- 1 planche par adulte (jambon de Bayonne et fromage de brebis)</p>
      </div>
      <div className={styles.gridImgContainer}>
        <img
          className={styles.restaurantImg}
          src="/img/modal/11/main.jpg"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/11/first.jpg"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/11/second.jpg"
          alt="nainai"
        />
        <img
          className={styles.gridImg}
          src="/img/modal/11/third.jpg"
          alt="nainai"
        />
      </div>
      <div className={styles.listContainer}>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            Maman j’ai raté l’avion en version française
          </span>
          <span className={styles.filmDate}>Dimanche 22 décembre à 18h</span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            Les Bronzés font du ski en version originale
          </span>
          <span className={styles.filmDate}>Dimanche 29 décembre à 19h</span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            The Dark Knight Le Chevalier Noir (2008) en version originale
            sous-titrée français
            <span className={styles.filmDate}>Dimanche 5 janvier à 18h</span>
          </span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            Les 3 Mousquetaires D’Artagnan en version originale
          </span>
          <span className={styles.filmDate}>Jeudi 9 janvier à 19h</span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            Harry Potter à l’école des sorciers en version originale sous-titrée
            français
            <span className={styles.filmDate}>Dimanche 12 janvier à 18h</span>
          </span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            Grease en version originale sous-titrée français
          </span>
          <span className={styles.filmDate}>Jeudi 16 janvier à 19h</span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            Gladiator en version originale sous-titrée français
          </span>
          <span className={styles.filmDate}>Dimanche 19 janvier à 18h</span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            No country for old men en version originale sous-titrée français
          </span>
          <span className={styles.filmDate}>Jeudi 23 janvier à 19h</span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            Jumanji (1995) en version originale sous-titrée français
          </span>
          <span className={styles.filmDate}>Dimanche 26 janvier à 18h</span>
        </span>
        <span className={styles.filmContainer}>
          <span className={styles.filmTitle}>
            La Dame de Fer en version originale sous-titrée français
          </span>
          <span className={styles.filmDate}>Jeudi 30 janvier à 19h</span>
        </span>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.harryPotter} src="/img/modal/11/harry-potter.jpg" alt="harry potter" />
      </div>
      <p className={styles.hint}>On va se voir le film des sorciers ? 🥰</p>
      <div className={styles.downloadContainer}>
        <a
          href="https://www.burdigala.com/nos-experiences#!/e/le-burdigala-fait-son-cin-ma-9084cf31"
          target="_blank"
          className={styles.link}
        >
          Site de l&apos;hôtel Burdigala 🍿
        </a>
      </div>
    </div>
  );
}
