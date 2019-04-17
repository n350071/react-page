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

class JobCareer extends React.Component {
  state = {
    expanded: null,
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
    function createQualificationRow(date, name, link){
      id +=1;
      return { id, date, name, link}
    }
    const qualificationRows = [
      createQualificationRow('2009/10',　'基本情報処理技術者', ''),
      createQualificationRow('2011/10',　'応用情報処理技術者', ''),
      createQualificationRow('2013/09',　'Project Management Basic', ''),
      createQualificationRow('2014/02',　'Estimating Technique Basic', ''),
      createQualificationRow('2017/11',　'LPIC-1', ''),
      createQualificationRow('2018/01',　'Ruby Silver v2.1', 'https://www.credential.net/m768dg7z'),
      createQualificationRow('2018/02',　'Ruby Gold v2.1', 'https://www.credential.net/8blgg8oo'),
    ];
    function createOssRow(project, pr, link,  desc,){
      id +=1;
      return { id, project, pr, link,  desc,}
    }
    const ossRows = [
      createOssRow('phonegap/phonegap-plugin-barcodescanner',　'#198', 'https://github.com/phonegap/phonegap-plugin-barcodescanner/pull/198', 'ハイブリッドアプリのバグを調べたところ、プラグインのAndroid側に不具合があることを突き止めたので、モンキーパッチを施しました。根本解決はお客様と相談した結果、見送ることになり、結果、マージも見送りとなりました。'),
      createOssRow('rails/rails',　'#32572', 'https://github.com/rails/rails/pull/32572', 'Railsのバージョン5.0に伴う変更がドキュメントに反映されていなかったため、ドキュメントを修正し、プルリクエストを送信しました。'),
      createOssRow('GoogleCloudPlatform/kubernetes-engine-samples',　'#90', 'https://github.com/GoogleCloudPlatform/kubernetes-engine-samples/issues/90', 'PVCの設定ミスによるMulti-Attach errorに関して、チュートリアルで起きた問題を修正するIssueを立て、PRの準備も完了しています。(Solutionのところに記載)'),
    ];

    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6" gutterBottom align="left">概要</Typography>
            <Typography variant="body1" gutterBottom align="left">
              業界10年目、最初の5年間を日本ユニシス株式会社でSoR系のシステムを担当し、
              次の4年間ではWebサービスの機能追加やスタートアップの現場で、
              チームマネジメントとプログラミングを経験しました。
            </Typography>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>資格</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Table className={classes.table} padding='none'>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableFont}>取得年月</TableCell>
                      <TableCell className={classes.tableFont} align="left">資格名</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {qualificationRows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell className={classes.tableFont}  component="th" scope="row">{row.date}</TableCell>
                        <TableCell className={classes.tableFont}  align="left">
                          {row.link
                            ? <a className="App-link"
                                href={row.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                {row.name}
                              </a>
                            : row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>OSS</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                <Table className={classes.table} padding='none'>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableFont}>プロジェクト</TableCell>
                      <TableCell className={classes.tableFont} align="left">PR</TableCell>
                      <TableCell className={classes.tableFont} align="left">説明</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ossRows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell className={classes.tableFont}  component="th" scope="row">{row.project}</TableCell>
                        <TableCell className={classes.tableFont}  align="left">
                          {row.link
                            ? <a className="App-link"
                                href={row.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                {row.pr}
                              </a>
                            : row.pr}
                        </TableCell>
                        <TableCell className={classes.tableFont}  component="th" scope="row">{row.desc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <Typography variant="h6" gutterBottom align="left">プロジェクト</Typography>

            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>リーン・スタートアップ支援サービス</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">React+Redux, Ruby on Rails, Docker</Typography>
                  <Typography variant="subtitle2" align="center">2018.6~</Typography>
                  <Typography variant="body1" align="left">
                    新しいプロダクトを作りたい人のビジネスモデルから実際に
                    エンジニアやデザイナーとコラボレーションするところまでを支援するサービスを作りました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    数名の複業エンジニアによる開発のため、稼働時間が合わなかったり、
                    完全リモートワークによりコミュニケーションが少なめでしたが、
                    個々が自律的に動くことで、リリースまで漕ぎ着けることができました。
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel-k8s'} onChange={this.handleChange('panel-k8s')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>プロジェクトスターターキットの開発(private)</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">Rails, Docker, kubernetes, GCP</Typography>
                  <Typography variant="subtitle2" align="center">2019.1~</Typography>
                  <Typography variant="body1" align="left">
                    あるプロジェクトでk8sを使い始めたのをキッカケに、新しくRailsのプロジェクトを始める際にGKEへCICDでデプロイできるリポジトリがあったら便利だと思い、作成しているところです。
                  </Typography>
                  <Typography variant="body1" align="left">
                    まずは、docker-composeでrails newまでいける
                    <a className="App-link" href='https://github.com/nao0515ki/docker-for-rails' target="_blank" rel="noopener noreferrer">
                      リポジトリ
                    </a>を作ってみました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    GKEにデプロイする
                    <a className="App-link" href='https://github.com/nao0515ki/rails-on-k8s' target="_blank" rel="noopener noreferrer">
                      リポジトリ
                    </a>です。作成中です。（kubectlでMySQLを操作するところはhelmで対応予定です）
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>広告配信システムの管理画面の機能拡張</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">Ruby on Rails</Typography>
                  <Typography variant="subtitle2" align="center">2018.5~2018.9</Typography>
                  <Typography variant="body1" align="left">
                    ２つの営業チームと４つの技術チームからなる広告配信サービスにおいて、
                    広告キャンペーンやセグメントなどを設定したり、配信結果などのデータを出力する部分を担当しました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    Rubyプログラマとしてだけでなく、マネジメントの経験を生かして、各チームの橋渡し役となり、
                    新規機能の開発を推進したことで、月間MVPをいただくこととなりました。
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>フリーランス準備期間(private)</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">Ruby on Rails</Typography>
                  <Typography variant="subtitle2" align="center">2017.11~2018.4</Typography>
                  <Typography variant="body1" align="left">
                    変更容易性を保つプログラミング能力を獲得するため、
                    <a className="App-link" href='https://github.com/nao0515ki/notes/blob/master/Book/' target="_blank" rel="noopener noreferrer">
                      オブジェクト指向、デザパタ、リファクタリング
                    </a>、アーキテクチャパターン(PoEAA)を勉強したり、Rubyの資格を取得し、最後に
                    <a className="App-link" href='https://github.com/nao0515ki/escapesurvive' target="_blank" rel="noopener noreferrer">
                      SNSサービス
                    </a>を作成しました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    6ヶ月間におよぶ長丁場だったため、Sakura VPSにRedmineを立てて管理しました。
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>某自動車会社の工場管理システム</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">Java, VBA, Linux</Typography>
                  <Typography variant="subtitle2" align="center">2017.2~2017.10</Typography>
                  <Typography variant="body1" align="left">
                    工場内のベルトコンベアを流れる自動車の仕様に合わせて、作業員に指示を送るシステムの移行を担当しました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    大規模システム開発へのPM候補としての参画予定でしたが、実際には開発は終了しており、
                    工場内に機械を設置する2年程度のシステム移行フェーズでした。
                    着任後3ヶ月で信頼を得て、メンバ→サブリーダへと昇格し、マネージャーからは「残業が減って助かったし、工数管理までやってくれるので助かる」とフィードバックをもらいました。
                    データ移行用Excel Macroを修正して従来の100倍早く動くようにしたり、
                    緊急対応で納期１週間の作業をCygwin上のLinuxコマンドで4時間で終わらせたり、
                    他のエンジニアが1日かけて解決できないバグを1時間で解決しました。
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>O2Oウェブマーケティングシステム</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">Java, Android(Java), iOS(Objective-C), Cordova, JQueryMobile, Push通知, iBeacon</Typography>
                  <Typography variant="subtitle2" align="center">2015.4~2017.1</Typography>
                  <Typography variant="body1" align="left">
                    ポイントカード、カタログ、イベント、クーポン、お店情報などを１つのアプリで管理できるサービスの機能拡張などを、
                    アプリ開発チームのリーダとして担当しました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    リーダとして着任以来、開発工数と品質および納期を改善しました。改善前は、納期を急ぎすぎて、バグの多いコードを納品していたため、
                    バグを直してリリースできるようになる頃には、見積もりの1.5〜２倍程度かかっており、納期に遅れていました。
                    改善として、要件定義と設計、プルリクエストによるコードレビュを行い、品質と見積り精度が向上し、顧客はリリース予定日を遅らせることなく
                    致命的バグのないコードをリリースできるようになりました。
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel-unisys-1'} onChange={this.handleChange('panel-unisys-1')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>データ分析システム</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">C# .NET</Typography>
                  <Typography variant="subtitle2" align="center">2014.4~2015.3</Typography>
                  <Typography variant="body1" align="left">
                    顧客が独自に集めたデータを抽出し、データ分析システムへ投入→分析することで、RFM分析やバスケット分析などができるツールの導入や改修を担当しました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    データ移行ツールを改修したり、
                    英語で書かれたバスケット分析アルゴリズムを読み解き、テストを先に書いて実装しました。
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel expanded={expanded === 'panel-unisys-2'} onChange={this.handleChange('panel-unisys-2')}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>公共系システム(複数)</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div style={{width: '100%'}}>
                  <Typography variant="subtitle1" align="center">Java, ASP.NET, VBA, MS-DOS</Typography>
                  <Typography variant="subtitle2" align="center">2010.10~2014.3</Typography>
                  <Typography variant="body1" align="left">
                    道路工事管理システムや、労働監督、顧客管理システム、薬事など、のシステム運用、改修を担当しました。
                  </Typography>
                  <Typography variant="body1" align="left">
                    新卒として配属されて以来、データセンターで本番機からログを収集し、月次報告書を作成などを行いました。
                    自動化を進めていき、複数プロジェクトの運用作業を任されるようになり、運用作業の傍ら、バグ対応や改修作業、
                    顧客から要望ヒアリングなどを行いました。
                  </Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>



          </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>

        </React.Fragment>
    );
  }
}

JobCareer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobCareer);
