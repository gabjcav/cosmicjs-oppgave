import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs'; 
import HomeContent from '../../components/HomeContent';
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
const HomeContainer = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
      const client = new Cosmic()
      const bucket = client.bucket({
        slug: process.env.BUCKET_SLUG,
        read_key: process.env.READ_KEY
      });

      bucket.getObject({
        slug: 'welcome-to-my-homepage',
        props: 'slug,title,content,metadata'
      })
      .then(data => {
        console.log(data);
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

    function renderHeaderImage() {
      return (
        <img src={pageData.metadata.header_image.imgix_url} alt="" />
      );
    }

    function renderPage() {
      return (
        <Container as="main">
          <PageTitle>{pageData.title}</PageTitle>
          {pageData.metadata.header_image && renderHeaderImage()}
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

export default HomeContainer;