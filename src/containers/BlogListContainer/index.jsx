import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs'; 
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import HomeContent from '../../components/HomeContent';
const BlogListContainer = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
      const client = new Cosmic()
      const bucket = client.bucket({
        slug: process.env.BUCKET_SLUG,
        read_key: process.env.READ_KEY
      });

      bucket.getObjects({
        type: 'blog-posts',
        props: 'title,slug',
        limit: 5
      })
      .then(data => {
        setPageData(data)
      })
      .catch(error => {
        console.log(error);
      })
    }, []);

    function renderSkeleton() {
      return (
        <p>Loading page....</p>
      );
    }

    function renderPage() {
      return (
        <Container as="main">
          <PageTitle>{pageData.title}</PageTitle>
          <HomeContent dangerouslySetInnerHTML={{__html: pageData.content}} />
          <ul>
              {pageData.objects.map(item => {
                  return (
                      <li>
                          <a href={`/blogg/${item.slug}`}>{item.title}</a>
                      </li>
                  )
              })}
          </ul>
        </Container>
      )
    }

    return (
      <>
        {(pageData === null) ? renderSkeleton() : renderPage()}
      </>
    )
}

export default BlogListContainer;