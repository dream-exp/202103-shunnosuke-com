import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const TeaTSconeMenuPage = () => (
  <Layout title="Tea & T scone メニューデザイン">
    <ContentsWrapper>
        <WorkHeader title="Tea & T scone メニューデザイン" />
        <WorkDescription>
            <p>
                <a href="https://tea-t-scone.com/">紅茶とスコーンの喫茶店 Tea&T scone</a>
            </p>
            <p>
            山口県山口市のカフェ「Tea & T scone」様の開店時メニューデザインを担当しました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/tea_t_scone_menu/tea_t_scone_menu_1.png",
             "/images/works/individual/tea_t_scone_menu/tea_t_scone_menu_2.jpg",
        ]} />
        <WorkInfo 
            period="2018/04 - 2018/06"
            technologies="Photoshop / Illustrator / InDesign"
            member="1名"
            responsible="デザイン全般を担当"
        />
    </ContentsWrapper>
  </Layout>
);

export default TeaTSconeMenuPage;