import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const CreativeKidsCampPage = () => (
  <Layout title="クリエイティブキッズキャンプ">
    <ContentsWrapper>
        <WorkHeader title="クリエイティブキッズキャンプ" />
        <WorkDescription>
            <p>
            地域の子どもたちにクリエイティブなモノ・コトに触れてもらい、創造的な考えを育むことを目標としたイベント「クリエイティブキッズキャンプ」の企画運営を行いました。
            </p>
            <p>
            都市部ではこうしたイベントは開催されていますが、地元である山口県周南市ではこうしたイベントは大々的に行われておらず、子どもたちがクリエイティブなモノ・コトに触れる機会が非常に限られていると感じました。そこで、周南地域の高専、大学、専門学校や企業、クリエイターが企画したワークショップを体験できるイベントを夏休みに企画。未来のクリエイターや技術者を輩出するためのきっかけを作る取り組みとなりました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/creative_kids_camp/creative_kids_camp_1.jpg",
             "/images/works/individual/creative_kids_camp/creative_kids_camp_2.jpg",
        ]} />
        <WorkInfo 
            period="2018/04 - 2018/08"
            others={<><a href="https://shunan.keizai.biz/headline/370/?fbclid=IwAR3l15sxF7Mt0sI4nqeC7sXiychZoCsFmlYHIqxe1dNfr_m-8PJgX8obCCo">徳山駅周辺でクリエーティブイベント　プログラミングやロボット製作体験も
 ― 周南経済新聞</a></>}
        />
    </ContentsWrapper>
  </Layout>
);

export default CreativeKidsCampPage;