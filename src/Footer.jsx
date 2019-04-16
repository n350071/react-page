import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Resume from './Resume.jsx'
import { Link } from 'react-router-dom';

const styles = theme => ({
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footers = [
  {
    title: '経歴',
    description: [{
      title: '履歴書',
      link: '/resume'
    }, {
      title: '職務経歴',
      link: '/job_career'
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

function Home(props) {
  const { classes } = props;

  return (
    <React.Fragment>
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
                  ? <Link to={item.link}>{item.title}</Link>
                    // <a className="App-link"
                    //     href={item.link}
                    //     target="_self"
                    //     rel="noopener noreferrer">
                    //     {item.title}
                    //   </a>
                   // <Resume
                      // title={item.title} />
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

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
