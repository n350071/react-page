import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './App.css';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'hidden',
  },
  table: {
    minWidth: 300,
  },
  tableFont: {
    fontSize: '12px'
  },
  expansionPanelDetails: {
    padding: '0px'
  }

});

class Resume extends React.Component {
  state = {
    open: false,
    expanded: null,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    let id = 0;
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
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Table className={classes.table} padding='none'>
              <TableBody>
                  <TableRow key={1}>
                    <TableCell className={classes.tableFont}  align="left">名前</TableCell>
                    <TableCell className={classes.tableFont}  component="th" scope="row">石垣尚紀</TableCell>
                  </TableRow>
                  <TableRow key={2}>
                    <TableCell className={classes.tableFont}  component="th" scope="row">年齢</TableCell>
                    <TableCell className={classes.tableFont}  align="left">34歳</TableCell>
                  </TableRow>
              </TableBody>
            </Table>

          <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>学歴</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
              <Table className={classes.table} padding='none'>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableFont}  >年月</TableCell>
                    <TableCell className={classes.tableFont}   align="left">大学</TableCell>
                    <TableCell className={classes.tableFont}   align="left">学部・専攻</TableCell>
                    <TableCell className={classes.tableFont}   align="left">状況</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {univRows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell className={classes.tableFont}  component="th" scope="row">{row.date}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.name}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.course}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.situation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>職歴</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
              <Table className={classes.table} padding='none'>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableFont} >年月</TableCell>
                    <TableCell className={classes.tableFont}  align="left">所属</TableCell>
                    <TableCell className={classes.tableFont}  align="left">組織</TableCell>
                    <TableCell className={classes.tableFont}  align="left">状況</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workRows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell className={classes.tableFont}  component="th" scope="row">{row.date}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.name}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.course}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.situation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>主な取引先</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
              <Typography variant="h6" align="left" color="textSecondary" component="p">
                株式会社サイバーエージェント様、ギルドワークス株式会社様。
                主に、アプリケーションエンジニアとして業務委託契約。
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>賞罰</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetails}>
              <Table className={classes.table} padding='none'>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableFont} >年月</TableCell>
                    <TableCell className={classes.tableFont}  align="left">組織</TableCell>
                    <TableCell className={classes.tableFont}  align="left">賞罰</TableCell>
                    <TableCell className={classes.tableFont}  align="left">ステータス</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {awardRows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell className={classes.tableFont}  component="th" scope="row">{row.date}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.name}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.course}</TableCell>
                      <TableCell className={classes.tableFont}  align="left">{row.situation}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>

        </React.Fragment>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
