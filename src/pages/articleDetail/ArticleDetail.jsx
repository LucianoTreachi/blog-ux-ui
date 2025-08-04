import { Helmet } from "react-helmet";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import NavigateToTop from "../../routing/NavigateToTop";
import GoBackButton from "../../components/goBackButton/GoBackButton";
import styles from "./ArticleDetail.module.css";

export default function ArticleDetail() {
  const { url } = useParams();
  const articleSelected = data.find((article) => article.url === url);

  return (
    <>
      <Helmet>
        <title>{articleSelected.title} | Artículo</title>
      </Helmet>

      <main>
        <section className={styles.section}>
          <NavigateToTop />
          <div className={styles.container}>
            <GoBackButton />
            <h1 className={styles.title}>{articleSelected.title}</h1>
            <span className={styles.time}>{articleSelected.time}</span>
            <img
              className={styles.cover}
              src={articleSelected.cover}
              alt=""
              width={1000}
              height={600}
            />
            <div className={styles.description}>
              {articleSelected.description}
            </div>
            <h2 className={styles.redTitle}>
              <ImCross className={styles.crossIcon} /> Evita esto
            </h2>
            <img
              className={styles.image}
              src={articleSelected.image1}
              alt="Imagen ilustrativa 1"
              width={1920}
              height={1920}
            />
            <h2 className={styles.greenTitle}>
              <FaCheck className={styles.checkIcon} /> Mejor esto
            </h2>
            <img
              className={styles.image}
              src={articleSelected.image2}
              alt="Imagen ilustrativa 2"
              width={1920}
              height={1920}
            />
          </div>
        </section>
      </main>
    </>
  );
}
