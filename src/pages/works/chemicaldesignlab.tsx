import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const ChemicalDesignLabPage = () => (
  <Layout title="ケミカルデザインラボ Webデザイン">
    <ContentsWrapper>
        <WorkHeader title="ケミカルデザインラボ Webデザイン" />
        <WorkDescription>
            <p>
            <a href="https://chemicaldesignlab.net/">Chemical Design Lab. ― ケミカルデザインラボ</a>
            </p>
            <p>
            山口県周南市の団体「ケミカルデザインラボ」様のWebデザイン（ロゴデザイン等、提供素材を除く）を担当しました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/chemicaldesignlab/chemicaldesignlab_1.png",
             "/images/works/individual/chemicaldesignlab/chemicaldesignlab_2.png",
        ]} />
        <WorkInfo 
            period="2017/12 - 2018/03"
            technologies="HTML / CSS / JavaScript / jQuery"
            member="1名"
            responsible="XDを用いたデザインからコーディングまですべてを担当（ロゴデザイン等、提供素材を除く）"
        />
    </ContentsWrapper>
  </Layout>
);

export default ChemicalDesignLabPage;