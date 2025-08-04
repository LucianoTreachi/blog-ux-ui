import { Helmet } from "react-helmet";
import Hero from "../../sections/hero/Hero";
import ArticleList from "../../sections/articleList/ArticleList";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Estrategias UX/UI para un diseño atractivo | Por Luciano Treachi
        </title>
      </Helmet>

      <main>
        <Hero />
        <ArticleList />
      </main>
    </>
  );
}
