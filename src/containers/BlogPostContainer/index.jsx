import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs'; 
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
import HomeContent from '../../components/HomeContent';
const BlogPostContainer = ({ match }) => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
      const client = new Cosmic()
      const bucket = client.bucket({
        slug: process.env.BUCKET_SLUG,
        read_key: process.env.READ_KEY
      });
      


      bucket.getObject({
        slug: match.params.slug,
        props: 'title,content'
      })
      .then(data => {
        console.log(data);
        console.log(pageData);
        setPageData(data.object)
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
      </Container>
      )
    }

    return (
      <>
        {(pageData === null) ? renderSkeleton() : renderPage()}
      </>
    )

    
}

export default BlogPostContainer;