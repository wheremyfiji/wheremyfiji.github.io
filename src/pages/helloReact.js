import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Hello() {
    const { siteConfig, siteMetadata } = useDocusaurusContext();
    return (
        <Layout title="Hello" description="Hello React Page">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <p>
                    Edit <code>pages/helloReact.js</code> and save to reload.
                </p>

            </div>
            <div>
                <h1>{siteConfig.title}</h1>
                <div>{siteMetadata.siteVersion}</div>
                <div>{siteMetadata.docusaurusVersion}</div>
            </div>
        </Layout>
    );
}