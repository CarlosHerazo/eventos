<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="es">
      <head>
        <title><xsl:value-of select="rss/channel/title"/>SueñosyDetalles</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f8f9fa;
            margin: 0;
            padding: 20px;
            color: #333;
            line-height: 1.6;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }
          
          .logo {
            height: 80px;
            margin-bottom: 15px;
          }
          
          h1 {
            color: #1b263b;
            font-size: 28px;
            margin: 0 0 10px;
          }
          
          .description {
            color: #666;
            font-size: 16px;
            max-width: 800px;
            margin: 0 auto 20px;
          }
          
          .events-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }
          
          .event-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          
          .event-image {
            height: 160px;
            width: 100%;
            object-fit: cover;
            background: #eee;
          }
          
          .event-content {
            padding: 15px;
          }
          
          .event-title {
            font-size: 18px;
            margin: 0 0 10px;
            color: #1b263b;
          }
          
          .event-title a {
            color: inherit;
            text-decoration: none;
          }
          
          .event-title a:hover {
            color: #4361ee;
          }
          
          .event-description {
            color: #555;
            margin-bottom: 15px;
            font-size: 14px;
          }
          
          .event-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
            font-size: 13px;
          }
          
          .event-date {
            color: #3f37c9;
            display: flex;
            align-items: center;
          }
          
          .event-category {
            background: rgba(67, 97, 238, 0.1);
            color: #4361ee;
            padding: 3px 10px;
            border-radius: 20px;
            display: flex;
            align-items: center;
          }
          
          .event-location {
            color: #666;
            font-size: 13px;
            margin-top: 8px;
            display: flex;
            align-items: center;
          }
          
          .icon {
            margin-right: 5px;
          }
          
          @media (max-width: 768px) {
            .events-grid {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <xsl:if test="rss/channel/image/url">
              <img class="logo">
                <xsl:attribute name="src"><xsl:value-of select="rss/channel/image/url"/></xsl:attribute>
                <xsl:attribute name="alt"><xsl:value-of select="rss/channel/title"/></xsl:attribute>
              </img>
            </xsl:if>
            <h1><xsl:value-of select="rss/channel/title"/></h1>
            <p class="description"><xsl:value-of select="rss/channel/description"/></p>
          </div>

          <div class="events-grid">
            <xsl:for-each select="rss/channel/item">
              <div class="event-card">
               
                
                <div class="event-content">
                  <h2 class="event-title">
                    <a href="{link}">
                      <xsl:value-of select="title"/>
                    </a>
                  </h2>
                  
                  <p class="event-description">
                    <xsl:value-of select="description"/>
                  </p>
                  
                  <div class="event-meta">
                    <div class="event-date">
                      <span class="icon">📅</span>
                      <xsl:value-of select="pubDate"/>
                    </div>
                    
                    <xsl:if test="category">
                      <div class="event-category">
                        <span class="icon">🏷</span>
                        <xsl:value-of select="category"/>
                      </div>
                    </xsl:if>
                  </div>
                  
                  <xsl:if test="location">
                    <div class="event-location">
                      <span class="icon">📍</span>
                      <xsl:value-of select="location"/>
                    </div>
                  </xsl:if>
                </div>
              </div>
            </xsl:for-each>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>