import { useRouter } from "next/router";
// our-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  //send a request to the backend API
  //to fetch the news item with newsId

  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>News ID: {newsId}</li>
        <li>
          <a href="/news/nextjs-is-a-great-framework">
            NextJS Is A Great Framework
          </a>
        </li>
        <li>Something else</li>
      </ul>
    </>
  );
}

export default DetailPage;
