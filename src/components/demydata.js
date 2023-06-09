import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // articles = [
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Ivan Watson,Kunal Sehgal,Deepak Rao,Rhea Mogul",
  //     "title": "Despair and anguish stalks hospitals as India reels from devastating train crash - CNN",
  //     "description": "Manto Kumar was traveling on the Coromandel Express with six of his friends when his train compartment began to violently shake like an earthquake.",
  //     "url": "https://www.cnn.com/2023/06/05/india/india-odisha-balasore-victim-families-survivors-intl-hnk-dst/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230603055102-02-india-train-crash-060323.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2023-06-05T09:37:00Z", "content": "Editors Note: This story contains graphic descriptions of injuries.\r\nManto Kumar was traveling on the Coromandel Express with six of his friends when his train compartment began to violently shake li… [+8357 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "CNBC" },
  //     "author": "Sophie Kiderlin",
  //     "title": "Treasury yields rise as investors assess interest rate outlook, key economic data - CNBC", "description": "U.S. Treasurys climbed Monday as investors considered what could be next for Federal Reserve interest rates and weighed key economic data.",
  //     "url": "https://www.cnbc.com/2023/06/05/us-treasury-yields-investors-assess-interest-rate-outlook-key-data.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107249306-1685630082743-gettyimages-1495130273-dscf3859_3ui61lpb.jpeg?v=1685953798&w=1920&h=1080",
  //     "publishedAt": "2023-06-05T08:29:58Z", "content": "U.S. Treasurys climbed Monday as investors considered what could be next for interest rates and weighed key economic data that could affect the Federal Reserve's next policy moves.\r\nAt 5:29 a.m. ET, … [+1347 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "BBC News" },
  //     "author": "https://www.facebook.com/bbcnews",
  //     "title": "Ukraine war: Russia says it thwarted major Ukrainian offensive - BBC",
  //     "description": "Moscow claims to have killed 250 Ukrainian troops, but this has not been independently verified.",
  //     "url": "https://www.bbc.com/news/world-europe-65806152",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/779B/production/_129991603_mediaitem129991112.jpg",
  //     "publishedAt": "2023-06-05T08:15:09Z", "content": "Russia's defence ministry says it has thwarted a major Ukrainian offensive in Donetsk, claiming to have killed 250 troops and destroyed armoured vehicles.\r\nVideo of what Russia says is the battle app… [+4015 chars]"
  //   },
  //   {
  //     "source": { "id": "associated-press", "name": "Associated Press" },
  //     "author": "The Associated Press",
  //     "title": "Missing man's body recovered at Iowa apartment collapse site; two others still missing - The Associated Press",
  //     "description": "DAVENPORT, Iowa (AP) — The body of one of three men who had been missing after the partial collapse of an apartment building  in Davenport, Iowa, has been found, a city official confirmed Sunday.",
  //     "url": "https://apnews.com/article/body-found-davenport-building-collapse-a0cba73c23cfc44b7547d185c88eb17f",
  //     "urlToImage": "https://storage.googleapis.com/afs-prod/media/05c87c10252b4ecab4dcdb1a4cbf1014/3000.webp",
  //     "publishedAt": "2023-06-05T08:07:39Z", "content": "DAVENPORT, Iowa (AP) The body of one of three men who had been missing after the partial collapse of an apartment building in Davenport, Iowa, has been found, a city official confirmed Sunday.\r\nBrand… [+3276 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Homero De la Fuente",
  //     "title": "‘Time to say goodbye’: Swedish legend Zlatan Ibrahimovic announces retirement from soccer at 41 - CNN",
  //     "description": "Swedish legend Zlatan Ibrahimovic has announced his retirement from a glittering soccer career at the age of 41, leaving Italy’s Serie A as the league’s oldest-ever goal scorer.",
  //     "url": "https://www.cnn.com/2023/06/05/sport/zlatan-ibrahimovic-retires-intl-hnk-spt/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230604194458-zlatan-ibrahimovic-despedida-ac-milan-deportes-cnn.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2023-06-05T07:58:00Z", "content": "Swedish legend Zlatan Ibrahimovic has announced his retirement from a glittering soccer career at the age of 41, leaving Italys Serie A as the leagues oldest-ever goal scorer.\r\nThe star striker made … [+2964 chars]"
  //   },
  //   {
  //     "source": { "id": "reuters", "name": "Reuters" },
  //     "author": null,
  //     "title": "California probing whether Florida sent migrant flight to Sacramento - Reuters",
  //     "description": "California's attorney general is investigating whether the government of the state of Florida played any role in sending more than a dozen migrants to the California capital of Sacramento without advance notice.",
  //     "url": "https://www.reuters.com/world/us/california-probing-whether-florida-sent-migrant-flight-sacramento-2023-06-05/",
  //     "urlToImage": "https://www.reuters.com/resizer/9Cbk6aImpHXrovPPJYm_M_gjfjs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZKRF4C3GYVPM7BXWDIJMEREZTU.jpg",
  //     "publishedAt": "2023-06-05T07:55:00Z", "content": "June 4 (Reuters) - California's attorney general is investigating whether the government of the state of Florida played any role in sending more than a dozen migrants to the California capital of Sac… [+1885 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" }, "author": null, "title": "LIVE: Prince Harry arrives at UK court - Reuters",
  //     "description": "Prince Harry arrives at the Rolls Building court in London where he will become the first senior British royal in 130 years to give evidence when he testifie...",
  //     "url": "https://www.youtube.com/watch?v=JpmE5LvZT9k", "urlToImage": "https://i.ytimg.com/vi/JpmE5LvZT9k/maxresdefault_live.jpg", "publishedAt": "2023-06-05T07:13:34Z", "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "CBS Sports" }, "author": "", "title": "NBA Finals Game 2, Heat vs. Nuggets: Resilient Miami, once again, grabs momentum on the road - CBS Sports",
  //     "description": "Miami steals home-court advantage as Denver loses its first home game this postseason", "url": "https://www.cbssports.com/nba/news/nba-finals-game-2-heat-vs-nuggets-resilient-miami-once-again-grabs-momentum-on-the-road/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/05/2e3a867f-4fc2-423f-b5dd-48f3e5447dee/thumbnail/1200x675/6a2bb216064a1ba992f65b7a6ea93a33/untitled-design-357.png", "publishedAt": "2023-06-05T06:45:00Z", "content": "DENVER -- And, just like that, the Miami Heat have the Denver Nuggets just where they want them.\r\nIn Game 2 of the NBA Finals Sunday night, the Heat's 111-108 win did several things at once. \r\nIt kno… [+3607 chars]"
  //   },
  //   {
  //     "source": { "id": "associated-press", "name": "Associated Press" }, "author": "David Rising", "title": "US releases video showing close-call in Taiwan Strait with Chinese destroyer - The Associated Press", "description": "BANGKOK (AP) — The United States military released video Monday of what it called an “unsafe” Chinese maneuver in the Taiwan Strait on the weekend, in which a Chinese navy ship cut sharply across the path of an American destroyer, forcing the U.S.",
  //     "url": "https://apnews.com/article/us-china-taiwan-strait-489a45bb6df134fa09443d285b3f8669", "urlToImage": "https://storage.googleapis.com/afs-prod/media/c5c2eb573dff49a688c81c9fe4adc103/3000.webp", "publishedAt": "2023-06-05T06:00:55Z", "content": "BANGKOK (AP) The United States military released video Monday of what it called an unsafe Chinese maneuver in the Taiwan Strait on the weekend, in which a Chinese navy ship cut sharply across the pat… [+2729 chars]"
  //   },
  //   {
  //     "source": { "id": "reuters", "name": "Reuters" }, "author": null, "title": "Police detain 23 people in Hong Kong on Tiananmen anniversary - Reuters", "description": "Hong Kong police said they detained 23 people on Sunday for \"breaching public peace\" and arrested a 53-year-old woman for \"obstructing police officers\" as authorities ramped up security for the 34th anniversary of the 1989 Tiananmen Square crackdown.", "url": "https://www.reuters.com/world/china/arrests-tight-security-hong-kong-tiananmen-anniversary-2023-06-04/", "urlToImage": "https://www.reuters.com/resizer/AZWBzP-yjUt_aioSvxVOHUzhpqQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7E2IX4JDUNNM3AKCO5MHIJ643U.jpg",
  //     "publishedAt": "2023-06-05T05:44:00Z", "content": "HONG KONG/TAIPEI, June 4 (Reuters) - Hong Kong police said they detained 23 people on Sunday for \"breaching public peace\" and arrested a 53-year-old woman for \"obstructing police officers\" as authori… [+5061 chars]"
  //   }, {
  //     "source": { "id": null, "name": "DW (English)" }, "author": "Deutsche Welle", "title": "Apple expected to unveil mixed-reality headset - DW (English)", "description": "The \"Reality Pro,\" or so it is rumored to be named, could pit Apple against Meta in competition over technology where real and digital worlds meet.",
  //     "url": "https://www.dw.com/en/apple-expected-to-unveil-mixed-reality-headset/a-65823145", "urlToImage": "https://static.dw.com/image/64864150_6.jpg", "publishedAt": "2023-06-05T04:44:05Z", "content": "Apple Inc. is widely expected to announce on Monday a new mixed-reality headgear at its annual Worldwide Developers Conference in California. \r\nIt would mark the tech giant's most significant product… [+1535 chars]"
  //   }, {
  //     "source": { "id": null, "name": "New York Post" }, "author": "Associated Press", "title": "US, UK navies say they responded to distress call as Iran's Revolutionary Guard 'harassed' ship - New York Post ", "description": "The Strait of Hormuz, the narrow mouth of the Persian Gulf, sees 20% of the world’s oil pass through it.",
  //     "url": "https://nypost.com/2023/06/05/us-uk-navies-say-they-responded-to-distress-call-as-irans-revolutionary-guard-harassed-ship/", "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-27345124-1685937038360.jpg?quality=75&strip=all&1685922653&w=1024",
  //     "publishedAt": "2023-06-05T04:03:00Z", "content": "The US Navy said Monday its sailors and the United Kingdom Royal Navy came to the aid of a ship in the crucial Strait of Hormuz after Iran’s Revolutionary Guard harassed it.\r\nThree fast-attack Guard … [+4452 chars]"
  //   }, {
  //     "source": { "id": "techcrunch", "name": "TechCrunch" }, "author": "Brian Heater", "title": "How to watch Apple unveil its AR/VR headset, iOS 17 and more at WWDC 2023 - TechCrunch", "description": "Tomorrow’s the big day, and we’re expecting big things – well, one really big thing for sure. Apple will kick of WWDC 2023 at 10AM PT Monday June 5 with its customary keynote. As ever, the event will focus on the latest versions of the company’s operating sys…", "url": "https://techcrunch.com/2023/06/04/how-to-watch-apple-unveil-its-ar-vr-headset-ios-17-and-more-at-wwdc-2023/",
  //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/06/wwdc-2023-featured-crop.jpg?w=1200", "publishedAt": "2023-06-05T04:01:02Z", "content": "Tomorrows the big day, and were expecting big things well, one really big thing for sure. Apple will kick of WWDC 2023 at 10AM PT Monday June 5 with its customary keynote. As ever, the event will foc… [+754 chars]"
  //   }, {
  //     "source": { "id": null, "name": "ScienceAlert" }, "author": "AFP", "title": "This Pill Can Halve The Risk of Death After Lung Cancer, Scientists Say - ScienceAlert", "description": "A pill has been shown to halve the risk of death from a certain type of lung cancer when taken daily after surgery to remove the tumor, according to clinical trial results presented on Sunday.",
  //     "url": "https://www.sciencealert.com/this-pill-can-halve-the-risk-of-death-after-lung-cancer-scientists-say", "urlToImage": "https://www.sciencealert.com/images/2023/06/TwoLargeOrangePillsOnOrange.jpg", "publishedAt": "2023-06-05T03:00:17Z", "content": "A pill has been shown to halve the risk of death from a certain type of lung cancer when taken daily after surgery to remove the tumor, according to clinical trial results presented on Sunday.\r\nThe r… [+2873 chars]"
  //   }, {
  //     "source": { "id": "reuters", "name": "Reuters" }, "author": null, "title": "Fighter jets chase small plane in Washington area before it crashes in Virginia - Reuters.com", "description": "The United States scrambled F-16 fighter jets in a supersonic chase of a light aircraft with an unresponsive pilot that violated airspace around Washington D.C. and later crashed into the mountains of Virginia, officials said.", "url": "https://www.reuters.com/world/us/loud-boom-shakes-washington-dc-fire-department-reports-no-incidents-2023-06-04/",
  //     "urlToImage": "https://www.reuters.com/resizer/OrpEJfQ8u6w6aCcHf14gY1PBTG4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VIPFH3HN4JLODLWV2QA6ATS6CQ.jpg", "publishedAt": "2023-06-05T02:58:00Z", "content": "WASHINGTON, June 4 (Reuters) - The United States scrambled F-16 fighter jets in a supersonic chase of a light aircraft with an unresponsive pilot that violated airspace around Washington D.C. and lat… [+3085 chars]"
  //   }, {
  //     "source": { "id": "cnn", "name": "CNN" }, "author": "Hilary Whiteman", "title": "Kathleen Folbigg: Mother who served 20 years for killing her four babies pardoned - CNN", "description": "A woman condemned as Australia’s worst female serial killer has been pardoned after serving 20 years behind bars for killing her four children in what appears to be one of the country’s gravest miscarriages of justice.", "url": "https://www.cnn.com/2023/06/04/australia/australia-kathleen-folbigg-attorney-general-hnk-intl/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230502122733-02-kathleen-folbigg-2003.jpg?c=16x9&q=w_800,c_fill", "publishedAt": "2023-06-05T02:39:00Z", "content": "A woman condemned as Australias worst female serial killerhas been pardoned after serving 20 years behind bars for killing her four children in what appears to be one of thecountrys gravest miscarria… [+5923 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" }, "author": null, "title": "New drug effective at preventing growth of lower-grade brain tumors, clinical trial finds - NBC News", "description": "A new drug that is in a phase 3 clinical trial has proven effective at preventing the growth of lower-grade brain tumors, with doctors saying nearly half of ...", "url": "https://www.youtube.com/watch?v=5KrLR7W0q80", "urlToImage": "https://i.ytimg.com/vi/5KrLR7W0q80/maxresdefault.jpg",
  //     "publishedAt": "2023-06-05T02:30:01Z", "content": null
  //   },
  //   { "source": { "id": null, "name": "SciTechDaily" }, "author": null, "title": "Behind Galactic Bars: Webb Telescope Unlocks Secrets of Star Formation - SciTechDaily", "description": "NASA's James Webb Space Telescope has captured a detailed image of the barred spiral galaxy NGC 5068. Part of a project to record star formation in nearby galaxies, this initiative provides significant insights into various astronomical fields. The telescope'…", "url": "https://scitechdaily.com/?p=283229", "urlToImage": "https://scitechdaily.com/images/NGC-5068-Webb-Composite-scaled.jpg", "publishedAt": "2023-06-05T02:22:03Z", "content": "ByNASAJune 4, 2023\r\nThis image of the barred spiral galaxy NGC 5068 is a composite from two of the James Webb Space Telescopes instruments, MIRI and NIRCam. Credit: ESA/Webb, NASA &amp; CSA, J. Lee a… [+8603 chars]" },
  //   {
  //     "source":
  //       { "id": null, "name": "NDTV News" }, "author": null, "title": "Nikki Haley Attacks Donald Trump, Ron DeSantis Over Ukraine - NDTV", "description": "Republican presidential hopeful Nikki Haley, UN ambassador under former President Donald Trump, went after her ex-boss and 2024 rival Ron DeSantis on Sunday over their refusal to say whether they want Ukraine to win its war against Russia.", "url": "https://www.ndtv.com/world-news/nikki-haley-attacks-donald-trump-ron-desantis-over-ukraine-4094388", "urlToImage": "https://c.ndtvimg.com/2023-02/12nobrmc_nikki-haley_625x300_26_February_23.jpg", "publishedAt": "2023-06-05T02:12:33Z", "content": "Nikki Haley, 51, a former South Carolina governor, declared her White House bid in February\r\nWashington: Republican presidential hopeful Nikki Haley, UN ambassador under former President Donald Trump… [+2679 chars]"
  //   }, 
  //   { "source": { "id": null, "name": "Daily Beast" }, "author": "Zachary Petrizzo, Ursula Perano", "title": "Far-Right Turns on Marjorie Taylor Greene—And MTG Hits Back in Text to Matt Gaetz - The Daily Beast", "description": "The far-right has noticed Rep. Marjorie Taylor Greene has been aligning herself more with Speaker Kevin McCarthy. But MTG isn't backing down—and is putting her critics on notice.", "url": "https://www.thedailybeast.com/far-right-turns-on-marjorie-taylor-greeneand-mtg-hits-back-in-text-to-matt-gaetz", "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_405,w_720,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1685924512/mtg_flip_copy_720_bgbyek", "publishedAt": "2023-06-05T01:50:09Z", "content": "Even before Marjorie Taylor Greene was sworn into Congress, she was a darling of the far-right.\r\nA MAGA soldier from a deep-red district, Greene spent her first few years in office as a thorn in the … [+7239 chars]" }
  // ]
/*

  constructor() {
    super();
    console.log("I am a construtor from this app");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };


  }




  async componentDidMount() {
    console.log("cdm");

    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.articles });

  }
  handlePrevClick = async () => {
    console.log("previous");
    let url = "https://newsapi.org/v2/top-headlines?country=us}&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  handleNextClick = async () => {
    console.log();
    if (this.state.page + 1 > (this.state.totalResults / 10)) {

    }
    else {
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
      let response = await fetch(url);
      let parsedData = await response.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
      console.log("Next");
      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    return (
      <div className='container my-3'>
        <h1>News1214 -- Topheadlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                url={element.url}
                author={element.author}
                date={element.publishedAt} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults]= useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd"
        );
        setNews(response.data.articles);
        setTotalResults(response.data.totalResult);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const handlePrevClick = async () => {
    console.log("previous");
    let url = "https://newsapi.org/v2/top-headlines?country=us}&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
    let response = await fetch(url);
    let parsedData = await response.json();
    console.log(parsedData);
    setNews(parsedData.articles);
  };

  const handleNextClick = async () => {
    console.log();
    if (page + 1 > totalResults / 10) {
    
    } else {
      let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad82d0fce6074bc8a0eb2fab70e1b8cd&pageSize=10";
      let response = await fetch(url);
      let parsedData = await response.json();
      console.log(parsedData);
      setNews(parsedData.articles);
      console.log("Next");
      setPage(page + 1);
    }
  };

  return (
    <div className='container my-3'>
    <h1>News1214 -- Topheadlines</h1>
    <div className="row">
      {news.map((articles) => {
        return (
          <div className="col-md-4" key={articles.url}>
            <NewsItem
              title={articles.title ? articles.title : ""}
              description={articles.description ? articles.description : ""}
              imageUrl={articles.urlToImage}
              url={articles.url}
              author={articles.author}
              date={articles.publishedAt}
            />
          </div>
        );
      })}</div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>
          &larr; Previous
        </button>
        <button type="button" className="btn btn-dark" onClick={handleNextClick}>
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default News;*/