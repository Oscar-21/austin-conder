import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import ArticleStyle from 'components/ArticleStyle';
import Comments from 'components/Comments';
import Share from 'material-ui/svg-icons/social/share';
import Email from 'material-ui/svg-icons/communication/email';
import Whatshot from 'material-ui/svg-icons/social/whatshot';

/* allow us to link to different pages in project folder*/
export default class Article extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      article: '',
    };
  }
  componentWillMount() {
    fetch('http://jasparlamar.crab:8000/api/showArticle/' + this.props.params.id)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      this.setState({
        article: json,
      });
    }.bind(this));
  }
  render() {
        // content Parent
    const backgroundStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      background: '#408193',
    };
    const backgroundContentBox = {
      margin: '0 auto',
      marginTop: '3%',
      paddingBottom: '3%',
      display: 'flex',
      flexDirection: 'row',
      background: '#F5F5F5',
      width: '90%',
    };
    // share icon
    const shareStyle = {
      marginLeft: '4%',
      paddingTop: '20%',
      position: 'fixed',
    };
    // hot icon
    const hotStyle = {
      marginLeft: '4%',
      paddingTop: '23%',
      position: 'fixed',
    };
    // git icon
    const gitStyle = {
      marginLeft: '4%',
      paddingTop: '26%',
      position: 'fixed',
    };
    // article styling
    const contentHolder = {
      marginTop: '2%',
      width: '33.33%',
    };
    // article title
    const contentTitle = {
      fontFamily: 'Franklin Gothic',
      fontSize: '2.4em',
      marginLeft: '33.33%',
      marginBottom: '2%',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    };
    // article body
    const contentStyle = {
      fontFamily: 'Monteserrat',
      fontSize: '1em',
      marginLeft: '33.33%',
      marginBottom: '2%',
    };
    // table styling
    const tableHolder = {
      marginLeft: '25%',
      marginTop: '10%',
      width: '33.33%',
      bottom: '248',
      height: '25',
      left: '900',
      right: '1519',
      top: '100',
    };
    const tableStyle = {
      fontFamily: 'Work Sans',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      fontSize: '.9em',
      marginLeft: '1%',
      marginRight: '10%',
      marginBottom: '2%',
      borderTop: '2px solid  #A9641E',
      borderBottom: '2px solid #A9641E',
    };
    // article image styling
    const articleImage = {
      width: '90%',
      height: '30vh',
      marginLeft: '33.33%',
      marginBottom: '2%',
    };
    const tableImage = {
      width: '65px',
      height: '65px',
      marginTop: '2px',
      marginBottom: '2px',
    };
    // content Parent
    const backgroundStyleMobile = {
      background: '  #F5F5F5',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    };
    const backgroundContentBoxMobile = {
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '4vw solid  #408193',
      borderRight: '4vw solid #408193',
    };
    // article styling
    const contentHolderMobile = {
      width: '100%',
    };
    // article title
    const contentTitleMobile = {
      fontFamily: 'Franklin Gothic',
      fontSize: '2em',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      padding: '5%',
      paddingLeft: '10%',
    };
    // article body
    const contentStyleMobile = {
      padding: '5%',
      fontFamily: 'Cormorant',
      fontWeight: 'bold',
    };
    // table styling
    const tableHolderMobile = {
      width: '100%',
    };
    const tableStyleMobile = {
      fontFamily: 'Work Sans',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      fontSize: '.9em',
      borderTop: '2px solid  #A9641E',
      borderBottom: '2px solid #A9641E',
    };
    // article image styling
    const articleImageMobile = {
      width: '100%',
      paddingTop: '5%',
      paddingBottom: '5%',
      paddingLeft: '8%',
      paddingRight: '8%',
    };
    const tableImageMobile = {
      width: '60%',
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '2%',
      height: '25vh',
    };
    const footerStyle = {
      margin: '0 auto',
      width: '90%',
      background: '#F5F5F5',
    };
    const contentStyleFoot = {
      width: '75%',
      margin: '0 auto',
      borderTop: '1px solid  #A9641E',
      paddingTop: '5%',
      fontFamily: 'Cormorant',
      marginBottom: '2%',
      fontWeight: 'bold',
    };
    return (
      <div style={backgroundStyle}>
        <Helmet title="Article" meta={[{ name: 'description', content: 'Description of Home' }]} />

        <header>
          <ArticleStyle />
        </header>

        <main>

          <Responsive minDeviceWidth={1025}>
            <div style={backgroundContentBox}>

              <div style={shareStyle}> <Share /> </div>
              <div style={hotStyle}> <Whatshot /> </div>
              <div style={gitStyle}> <Email /> </div>

              <div style={contentHolder}>
                <div style={contentTitle}>
                  {this.state.article.title}
                </div>

                <img style={articleImage} src={this.state.article.image} alt="" />

                <div style={contentStyle}>
                  <span style={{ fontFamily: 'Playfair Text', fontSize: '1.5em' }}>
                    {this.state.article.firstCharacter}
                  </span>
                  {this.state.article.body}
                </div>
              </div>

              <div style={tableHolder}>
                <div style={tableStyle}>
                  <img style={tableImage} src="https://68.media.tumblr.com/6592dd0c94e522cd649b37d34564354d/tumblr_onmo7oQX4i1ui53xxo1_1280.png" alt="" />
                  and stuff
                </div>

                <div style={tableStyle}>
                  <img style={tableImage} src="http://68.media.tumblr.com/297b1524bf497b54287a391dddc041b7/tumblr_on8bvj5R991t15yufo1_1280.jpg" alt="" />
                  and stuff
                </div>

                <div style={tableStyle}>
                  <img style={tableImage} src="https://68.media.tumblr.com/2963863333a53592395331c524e11957/tumblr_omo46c9cjs1utmnjno1_1280.jpg" alt="" />
                  and stuff
                </div>

                <div style={tableStyle}>
                  <img style={tableImage} src="https://s-media-cache-ak0.pinimg.com/564x/82/88/b5/8288b5b4c1ebbc253c01d84cdacc88da.jpg" alt="" />
                  and stuff
                </div>

              </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1024}>
            <div style={backgroundStyleMobile}>
              <div style={backgroundContentBoxMobile}>

                <div style={contentHolderMobile}>

                  <div style={contentTitleMobile}>
                    {this.state.article.title}
                  </div>

                  <img style={articleImageMobile} src={this.state.article.image} alt="" />

                  <div style={contentStyleMobile}>
                    <span style={{ fontFamily: 'Playfair Text', fontSize: '1.5em' }}>
                      {this.state.article.firstCharacter}
                    </span>
                    {this.state.article.body}
                  </div>
                </div>

                <div style={tableHolderMobile}>

                  <div style={tableStyleMobile}>
                    <img style={tableImageMobile} src="https://68.media.tumblr.com/6592dd0c94e522cd649b37d34564354d/tumblr_onmo7oQX4i1ui53xxo1_1280.png" alt="" />
                    and stuff
                  </div>

                  <div style={tableStyleMobile}>
                    <img style={tableImageMobile} src="http://68.media.tumblr.com/297b1524bf497b54287a391dddc041b7/tumblr_on8bvj5R991t15yufo1_1280.jpg" alt="" />
                    and stuff
                  </div>

                  <div style={tableStyleMobile}>
                    <img style={tableImageMobile} src="https://68.media.tumblr.com/2963863333a53592395331c524e11957/tumblr_omo46c9cjs1utmnjno1_1280.jpg/" alt="" />
                    and stuff
                  </div>

                  <div style={tableStyleMobile}>
                    <img style={tableImageMobile} src="https://s-media-cache-ak0.pinimg.com/564x/82/88/b5/8288b5b4c1ebbc253c01d84cdacc88da.jpg" alt="" />
                    and stuff
                  </div>
                </div>
              </div>
            </div>
          </Responsive>
        </main>
        <footer style={footerStyle}>
          <div style={contentStyleFoot}>
            <Comments />
          </div>
        </footer>
      </div>
    );
  }
}
