import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs'; 
import Container from '../../components/Container';
import PageTitle from '../../components/PageTitle';
const ContactContainer = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
      const client = new Cosmic()
      const bucket = client.bucket({
        slug: process.env.BUCKET_SLUG,
        read_key: process.env.READ_KEY
      });

      bucket.getObject({
        slug: 'contact',
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

    

    function renderPage() {
      return (
        <Container as="main">
          <PageTitle>{pageData.title}</PageTitle>
          <div dangerouslySetInnerHTML={{__html: pageData.content}}></div>
        </Container>
      )
    }

    return (
      <>
        {(pageData === null) ? renderSkeleton() : renderPage()}
      </>
    )
}

export default ContactContainer;