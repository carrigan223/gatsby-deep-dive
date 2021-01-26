import React from "react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import posed from "react-pose";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";

const TRANSITION_LENGTH = 1.5;

const FadingContent = posed.div({
  exiting: { opacity: 0 },
});

const SlidingHeader = posed.div({
  exiting: {
    y: ({ element }) => {
      const navbar = document.querySelector("header");
      const navbarDimensions = navbar.getBoundingClientRect();
      const distanceToTop =
        element.getBoundingClientRect().top - navbarDimensions.height;
      return distanceToTop * -1;
    },
    transition: {
      ease: [0.59, 0.01, 0.28, 1],
      delay: 250,
      duration: TRANSITION_LENGTH * 1000 - 250,
    },
  },
});

const ProjectInner = ({ transitionStatus, project }) => {
  const nextProjectUrl = `/projects/${project.next.slug}`;
  const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: () => {
      if (document) {
        document.body.style.overflow = "hidden";
      }
    },
  };

  const entryTransition = {
    delay: TRANSITION_LENGTH,
    trigger: () => {
      if (document && window) {
        window.scrollTo(0, 0);
        document.body.style.overflow = "visible";
      }
    },
  };

  return (
    <Layout>
      <FadingContent pose={transitionStatus}>
        <ProjectHeader project={project} />
        <ProjectContent />
      </FadingContent>
      <TransitionLink
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={nextProjectUrl}
        exit={exitTransition}
        entry={entryTransition}
      >
        <SlidingHeader pose={transitionStatus}>
          <ProjectHeader project={project.next} truncated={shouldTruncate} />
        </SlidingHeader>
      </TransitionLink>
    </Layout>
  );
};

const Project = ({ pageContext: project }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <ProjectInner transitionStatus={transitionStatus} project={project} />
      )}
    </TransitionState>
  );
};

export default Project;
