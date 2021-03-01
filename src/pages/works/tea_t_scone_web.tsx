import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const TeaTSconeWebPage = () => (
  <Layout title="Tea & T scone Webデザイン">
    <ContentsWrapper>
        <WorkHeader title="Tea & T scone Webデザイン" />
        <WorkDescription>
            <p>
                <a href="https://tea-t-scone.com/">紅茶とスコーンの喫茶店 Tea&T scone</a>
            </p>
            <p>
            山口県山口市のカフェ「Tea & T scone」様のWebデザインを担当しました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/tea_t_scone_web/tea_t_scone_web_1.png",
             "/images/works/individual/tea_t_scone_web/tea_t_scone_web_2.png",
        ]} />
        <WorkInfo 
            period="2018/04 - 2018/06"
            technologies="HTML / CSS / JavaScript / jQuery"
            member="1名"
            responsible="XDを用いたデザインからコーディングまですべてを担当（ロゴデザイン等、提供素材を除く）"
        />
    </ContentsWrapper>
  </Layout>
);

export default TeaTSconeWebPage;