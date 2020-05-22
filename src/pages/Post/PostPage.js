import React from 'react';
import { Link } from 'react-router-dom';
import './PostPage.scss';

function PostPage(props) {
  const id = +props.match.params.id;

  let articles = [
    {
      id: 1,
      title: 'Family of God Fellowship',
      text: `Is located in beautiful Rocky Point, Mexico. Pastor Tab Gray's mission includes compassionate outreach along with the proclamation of the Gospel.`,
      image: '../assets/images/1.png',
    },
    {
      id: 2,
      title: 'Test Article 1',
      text: 'Test 123 ',
      image: '../assets/images/1.png',
    },
  ];
  const articleSelected = articles.find((a) => {
    return a.id === id;
  });

  const otherArticles = articles.filter((a) => a.id === id);

  return (
    <div className="component-container   pt-0">
      <section className="pt-0 p-4 row mx-0 col-lg-10 d-flex justify-content-center mx-auto">
        <div className="row mx-0 col-lg-8 col-sm-12 my-4 post-card ">
          <div className="img-post-container w-100">
            <img
              className="img-post w-100"
              src={articleSelected.image}
              alt={articleSelected.title}
            ></img>
          </div>
          <h1 className="mt-4 ml-2 mb-2 col-12">{articleSelected.title}</h1>

          <p className="my-2 ml-2 mb-5 col-12 ">{articleSelected.text}</p>
        </div>
        <div className="col-lg-4  mx-auto p-4">
          <div className="latest-news-widget  p-1 mx-auto">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                className="read-more ln-item other-articles p-3"
                to={{
                  pathname: '/post/' + article.id,
                  article: article,
                }}
              >
                <img src={article.image} alt="" />
                <div className="ln-text">
                  <div className="ln-date">April 1, 2019</div>
                  <h6>{article.title}</h6>
                  <div className="ln-metas">
                    <div className="ln-meta">By Admin</div>
                    <div className="ln-meta">3 Comments</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostPage;
