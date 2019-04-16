import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './App.css';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Resume extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, title } = this.props;
    let id = 0;
    function createData(name, calories, fat, carbs, protein) {
      id += 1;
      return { id, name, calories, fat, carbs, protein };
    }
    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    function createResume(date, name, course, situation){
      id +=1;
      return { id, date, name, course, situation}
    }
    const univRows = [
      createResume('2004/04',　'静岡大学', '工学部システム工学科', '入学'),
      createResume('2008/03',　'静岡大学', '工学部システム工学科', '卒業'),
      createResume('2008/04',　'筑波大学大学院', 'システム情報工学研究科', '入学'),
      createResume('2010/03',　'筑波大学大学院', 'システム情報工学研究科', '卒業')
    ];
    const workRows = [
      createResume('2010/04',　'日本ユニシス株式会社', '', '入社'),
      createResume('2010/10',　'日本ユニシス株式会社', '公共システム本部', '配属'),
      createResume('2014/04',　'日本ユニシス株式会社', 'アドバンスド技術部', '配属'),
      createResume('2015/03',　'日本ユニシス株式会社', 'アドバンスド技術部', '退社'),
      createResume('2015/04',　'株式会社LASSIC', 'システムインテグレーション部', '入社'),
      createResume('2017/01',　'株式会社LASSIC', 'システムインテグレーション部', '退社'),
      createResume('2010/04',　'セコム株式会社', '', '入社'),
      createResume('2017/02',　'セコムトラストシステムズ株式会社', '関西支店技術部', '出向'),
      createResume('2017/10',　'セコム株式会社', '', '退社'),
      createResume('2017/11',　'個人事業主', '', '開業準備'),
      createResume('2018/05',　'個人事業主', '', '開業'),
    ];
    const awardRows = [
      createResume('2016/05',　'株式会社LASSIC', 'モバイルアプリ大賞', '受賞'),
      createResume('2018/06',　'株式会社サイバーエージェント アドテク本部', '6月度MVP', '受賞')
    ];

    return (
      <div>
        <a className="App-link" onClick={this.handleClickOpen}>
          {title}
        </a>

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar} color='default'>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                閉じる
              </Typography>
            </Toolbar>
          </AppBar>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">履歴書</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="h6">基本情報</Typography>
              </Grid>
              <Grid item xs={12}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>名前</TableCell>
                      <TableCell align="left">年齢</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow key={1}>
                        <TableCell component="th" scope="row">石垣尚紀</TableCell>
                        <TableCell align="left">33歳(5月生まれ)</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">学歴</Typography>
              </Grid>
              <Grid item xs={12}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>年月</TableCell>
                      <TableCell align="left">大学</TableCell>
                      <TableCell align="left">学部・専攻</TableCell>
                      <TableCell align="left">状況</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {univRows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">{row.date}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.course}</TableCell>
                        <TableCell align="left">{row.situation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">職歴</Typography>
              </Grid>
              <Grid item xs={12}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>年月</TableCell>
                      <TableCell align="left">所属</TableCell>
                      <TableCell align="left">組織</TableCell>
                      <TableCell align="left">状況</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {workRows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">{row.date}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.course}</TableCell>
                        <TableCell align="left">{row.situation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">主な取引先</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" align="left" color="textSecondary" component="p">
                  株式会社サイバーエージェント様、ギルドワークス株式会社様。
                  主に、アプリケーションエンジニアとして業務委託契約。
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">賞罰</Typography>
              </Grid>
              <Grid item xs={12}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>年月</TableCell>
                      <TableCell align="left">組織</TableCell>
                      <TableCell align="left">賞罰</TableCell>
                      <TableCell align="left">ステータス</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {awardRows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">{row.date}</TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.course}</TableCell>
                        <TableCell align="left">{row.situation}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">職務経歴書</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </Dialog>
      </div>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
