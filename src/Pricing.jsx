import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import rubyLogo from './ruby_logo.svg';
import logo from './logo.svg';
import './App.css';
import Resume from './Resume.jsx'

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    // flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 900,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'FrontEnd',
    description: ['ReactJS', 'JQuery', 'JQueryMobile', 'Android(Java)', 'Cordova', 'iOS(Objective-C)'],
  },
  {
    title: 'BackEnd',
    subheader: 'Most popular',
    description: [
      'Ruby on Rails',
      'Java Struts2',
      'C#.NET',
      'ASP.NET',
    ],
  },
  {
    title: 'Infra/Ops',
    description: [
      '(kubernetes)',
      'Docker',
      'Linux',
      'Git',
      'CircleCI 1,2',
      'Windows Server',
    ],
  },
  {
    title: 'Others',
    description: [
      'PM(Agile)',
      'PL(Waterfall)',
      'オフショア',
      'TDD, OOP',
    ],
  },
];
const footers = [
  {
    title: '経歴',
    description: [{
      title: '履歴書',
      link: './'
    }, {
      title: '職務経歴書',
      link: './'
    }],
  },
  {
    title: '連絡先',
    description: [{
      title: 'Twitter',
      link: 'https://twitter.com/shirofune9876'
    }, {
      title: 'Facebook',
      link: 'https://www.facebook.com/naoki0515ishigaki'
    }],
  },
  {
    title: 'その他',
    description: [{
      title: 'GitHub',
      link: 'https://github.com/nao0515ki'
    }, {
      title: 'Qiita',
      link: 'https://qiita.com/nao_0515_ki'}
    ],
  },
];

function Pricing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={rubyLogo} className="Ruby-logo" alt="logo" />
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            石垣尚紀
          </Typography>
          {/*<Button>Features</Button>*/}
          {/*<Button>Enterprise</Button>*/}
          {/*<Button>Support</Button>*/}
          {/*<Button color="primary" variant="outlined">*/}
          {/*  Login*/}
          {/*</Button>*/}
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
            Web Developer
          </Typography>
          <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
            石垣尚紀
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            業界10年目。前半5年を日本ユニシスでSEとして過ごし、後半4年をWeb Developerとして様々なプロジェクトを経験しました。
            PM,PGおよび運用を担当。現在はフリーランスとして活動中。
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-start">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={3} md={3}>
              <Card>
                <CardHeader
                  title={tier.title}
                  // subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  // action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  {/*<div className={classes.cardPricing}>*/}
                  {/*  <Typography component="h2" variant="h3" color="textPrimary">*/}
                  {/*    ${tier.price}*/}
                  {/*  </Typography>*/}
                  {/*  <Typography variant="h6" color="textSecondary">*/}
                  {/*    /mo*/}
                  {/*  </Typography>*/}
                  {/*</div>*/}
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                {/*<CardActions className={classes.cardActions}>*/}
                {/*  <Button fullWidth variant={tier.buttonVariant} color="primary">*/}
                {/*    {tier.buttonText}*/}
                {/*  </Button>*/}
                {/*</CardActions>*/}
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item.title} variant="subtitle1" color="textSecondary">
                {footer.title == '経歴'
                  ? <Resume
                      title={item.title} />
                  :<a className="App-link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      {item.title}
                    </a>
                  }
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);
