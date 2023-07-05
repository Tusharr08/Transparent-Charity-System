import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await fetch('../LandingPage.html');
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtml();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default LandingPage;
