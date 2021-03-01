import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const WienXmasMenuPage = () => (
  <Layout title="写真展「碧の風景」">
    <ContentsWrapper>
        <WorkHeader title="写真展「碧の風景」" />
        <WorkDescription>
            <p>
            地元・山口県下松市のコーヒーボーイ下松店様にて、個展「碧の風景」を開催させていただきました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/aonofukei/aonofukei_1.jpg",
             "/images/works/individual/aonofukei/aonofukei_2.png",
        ]} />
        <WorkInfo 
            period="2020/03"
            others={<><a href="https://www.coffeeboy.co.jp/news/detail/713">片岡駿之介写真展「碧の風景」
 ― 徳山コーヒーボーイ</a></>}
        />
    </ContentsWrapper>
  </Layout>
);

export default WienXmasMenuPage;