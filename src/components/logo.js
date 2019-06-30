import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const SiteLogosWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SiteLogo = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpLogo {
          edges {
            node {
              url {
                source_url
              }
            }
          }
        }
      }
    `}
    render={props => (
      <SiteLogosWrapper>
        {props.allWordpressWpLogo.edges.map(siteLogos => (
          <Link to={siteLogos.node.slug}>
            <img
              src={siteLogos.node.url.source_url}
              width="100"
              height="auto"
              object-fit="cover"
              alt="Thumbnail"
            />
          </Link>
        ))}
      </SiteLogosWrapper>
    )}
  />
)

export default SiteLogo
