import styles from './santa-modal-day-1.module.scss';

export default function ModalDay1() {
  return (
    <div className={styles.textContainer}>
      <p>
        Mon Chat, Margaux,
        <br /> Ça y est ! Nous y sommes ! Le premier jour de décembre est arrivé
        🎅 Et qui dit décembre dit… Dernier mois de l&apos;année 2024… Mais… Qui
        dit dernier mois de l&apos;année, dit aussi, mois le plus rempli de
        cadeaux et surtout… rempli d&apos;amour.
      </p>
      <p>
        Ce calendrier devant lequel tu te tiens, a été façonné pour que ton mois
        en soit rempli. Mais ce calendrier qui repose devant toi est surtout né
        d&apos;une chose. Quelle est-telle ?
      </p>
      <p>
        Apparue il y a quelques mois, toujours près de moi, elle
        m&apos;accompagne de jour comme de nuit, elle me rechauffe au point de
        te servir comme bouillotte et surtout… elle me comble de bonheur.
      </p>
      <p>
        Postée au plus profond de mon coeur elle est née le soir d&apos;un ciel
        étoilé.
      </p>
      <p>
        Cette chose dont je parle, c&apos;est la flamme que tu as allumé lors de
        notre premier baiser le 11 août 2024 sur la plage du Porge.
      </p>
      <img
        src="/img/modal/1/letter-picture.jpg"
        alt="le porge"
        className={styles.letterImage}
      />
      <p>
        Que ce mois de décembre accompagné de ton calendrier te remplissent de
        surprises, d&apos;amour et de bonheur comme tu le fais pour moi.
      </p>
      <span className={styles.sign}>Ton Youyou qui t&apos;aime ❤️</span>
    </div>
  );
}
