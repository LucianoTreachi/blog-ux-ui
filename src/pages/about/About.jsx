import { Helmet } from "react-helmet";
import NavigateToTop from "../../routing/NavigateToTop";
import GoHomeButton from "../../components/goHomeButton/GoHomeButton";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre este Blog</title>
      </Helmet>

      <main>
        <section className={styles.section}>
          <NavigateToTop />
          <div className={styles.container}>
            <GoHomeButton />
            <h1 className={styles.title}>Sobre este Blog</h1>
            <div className={styles.text}>
              <p>
                En un mundo cada vez más digital y orientado a la experiencia
                del usuario, comprender y aplicar estrategias efectivas de UX y
                UI se ha vuelto esencial para crear productos y sitios web que
                no solo sean atractivos y memorables, sino también funcionales,
                intuitivos y fáciles de usar.
              </p>
              <p>
                Aquí encontrarás una amplia gama de consejos y técnicas
                destinadas a mejorar la experiencia de usuario en tus proyectos
                digitales.
              </p>
              <p>
                Ya seas un diseñador novato que está dando sus primeros pasos en
                este emocionante campo, o bien un experto en la materia en busca
                de inspiración y nuevas perspectivas, mi objetivo es
                proporcionarte información valiosa y práctica que te ayude a
                perfeccionar tus habilidades y a crear experiencias digitales
                excepcionales.
              </p>
              <p>
                En este blog descubrirás cómo simplificar los procesos y hacer
                que las acciones sean más fluidas; entenderás mejor cómo los
                usuarios perciben y responden a tu diseño; explorarás técnicas
                para mejorar la estructura de la información, la disposición de
                los elementos y la navegación del usuario.
              </p>
              <p>
                Mi compromiso es proporcionarte contenido relevante y
                actualizado que te ayude a mantenerte al tanto de las tendencias
                y mejores prácticas en el mundo del diseño UX/UI.
              </p>
              <span className={styles.span}>💜 Luciano Treachi </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
