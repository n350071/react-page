import React from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import RubyLogo from './ruby_logo.svg';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
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
  customWidth: {
    maxWidth: 176,
  },
});

const tiers = [
  {
    title: 'フロント',
    description: ['React+Redux', 'JQuery', 'JQueryMobile', 'Android(Java)', 'Cordova', 'iOS(Objective-C)'],
  },
  {
    title: 'バック',
    subheader: 'Most popular',
    description: [
      'Ruby on Rails',
      'Java Struts2',
      'C#.NET',
      'ASP.NET',
    ],
  },
  {
    title: 'インフラ',
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
    title: 'その他',
    description: [
      'PM(Agile)',
      'PL(Waterfall)',
      'オフショア',
      'TDD, OOP',
    ],
  },
];

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
            Web Developer
          </Typography>
          <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
            所属 : フリーランス
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

        <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
        スキル
        </Typography>

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
                    <React.Fragment key={line}>
                    {line === 'React+Redux'
                      ? <React.Fragment>
                          <img src={logo} className="React-logo" alt="logo" />
                          <Tooltip
                            enterTouchDelay = {0}
                            leaveTouchDelay = {2000}
                            disableHoverListener
                            title="クリックありがとうございます🎉このサイトはReactで作りました！"
                            classes={{ tooltip: classes.customWidth }}>
                            <Button id='react-tooltip-no-upcase'>
                              <Typography variant="subtitle1" align="center" key={line}>{line}</Typography>
                            </Button>
                          </Tooltip>
                        </React.Fragment>
                      : line === 'Ruby on Rails'
                        ? <React.Fragment>
                            <img src={RubyLogo} className="Ruby-logo" alt="logo" />
                            <Tooltip
                              enterTouchDelay = {0}
                              leaveTouchDelay = {2000}
                              disableHoverListener
                              title="いちばん得意な言語です👍"
                              classes={{ tooltip: classes.customWidth }}>
                              <Button id='react-tooltip-no-upcase'>
                                <Typography variant="subtitle1" align="center" key={line}>{line}</Typography>
                              </Button>
                            </Tooltip>
                          </React.Fragment>
                        : <Typography variant="subtitle1" align="center" key={line}>{line}</Typography>
                    }
                    </React.Fragment>
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
    </React.Fragment>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
