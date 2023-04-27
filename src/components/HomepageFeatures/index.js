import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BEYOND BRANDED TO DELIVER TRUSTED CALLS',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
Quickly identifies your brand so customers can answer the calls they want and need

Significantly increases your answer and first-call resolution rates

Transforms the phone screen into a personalized, actionable message customers won’t ignore, silence or send to voicemail.
      </>
    ),
  },
  {
    title: 'Reduce Blocked Calls And Increase Answer Rates',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
Ringer Interactive Caller ID™ increases answer rates, helping ensure your customers get the information they need while strengthening their relationship with you. Add a full-screen personalized message and call-to-action and watch resolution rates soar.
      </>
    ),
  },
  {
    title: 'Increased Trust ',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
 Ringer Interactive can help prevent calls from being labeled as spam with phone number registration, reputation monitoring, and improper blocking and labeling prevention and remediation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
