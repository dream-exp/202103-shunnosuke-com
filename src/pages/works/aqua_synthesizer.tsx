import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';
import WorkYoutube from 'atoms/works/WorkYoutube';

const AquaSynthesizerPage = () => (
  <Layout title="Aqua Synthesizer">
    <ContentsWrapper>
        <WorkHeader title="Aqua Synthesizer" />
        <WorkDescription>
            <p>
            　Aqua Synthesizer は、水を用いたインタラクティブアートです。鑑賞者が水の入った容器を作品中に設置すると、容器の水深や水面のゆらぎ、容器の置かれている場所を認識し、インタラクティブに音を奏でると共に映像を容器に投影します。この作品のキーコンセプトには「波」というキーワードがあります。姿形は違えど、波という共通の性質を持つ「水・音・光」を使って、それぞれが密接に絡み合う様子を表現しています。
            </p>
            <p>
            水深等の測定はKinect V2のToFセンサを利用しています。水などの透明体を含むシーンをToFカメラで撮影した際に、光路長が変化することにより生じる計測歪みを用いて水深の推定を実現しました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/aqua_synthesizer/aqua_synthesizer_1.jpg",
             "/images/works/individual/aqua_synthesizer/aqua_synthesizer_2.png",
             "/images/works/individual/aqua_synthesizer/aqua_synthesizer_3.png"
        ]} />
        <WorkDescription>
            <p>
            高専専攻科2年次に制作。別の用途のために、Kinect V2 で水面の深度画像を撮影した時の挙動を調べていたところ、水面を撮影した時の深度画像から得られる距離に特徴的な歪みが発生することがわかりました。そこで、この歪みを利用した水深推定ならびに、推定結果を応用したインタラクティブアートを作ることができないか、というところからこの企画がスタートしました。従来では、インタラクティブアートにおける水深の測定は1点のみを計測する超音波センサ等を用いるのが一般的でしたが、Kinect V2 の深度画像を利用することで、多点同時的に水深の測定が可能となりました。
            </p>
        </WorkDescription>
        <WorkYoutube 
            VideoID={"hmgjRnJYTfo"}
        />
        <WorkInfo 
            period="2018/06 - 2019/01"
            technologies="C# / Python / PureData / Processing"
            member="2名"
            responsible="徳山高専専攻科の修了研究として実施。水深の推定部分の実装から、音や映像を用いたインタラクティブシステムの構築まで一貫して担当しました。"
            others={<>
                査読あり原著論文： <br />Shunnosuke Kataoka, Noriaki Suetake and Takanori Koga, ``Water Depth Estimation Using Measurement Distortion of Time-of-Flight Camera and Its Application to Interactive Art,'' Innovative Computing, Information and Control Express Letters (ICIC Express Letters), Part B: Applications, Vol.**, No.**, 2021.** (accepted)<br /><br />
                技術研究報告（査読なし）：<br />片岡 駿之介, 古賀 崇了, “室内環境におけるToFカメラを用いた水深の多点同時測定に関する検討,” 信学技報, vol. 118, no. 346, SIS2018-24, pp. 17-20, 2018.12<br/><br />
                口頭発表（査読なし）：<br />片岡 駿之介, 古賀 崇了, “ToFカメラの計測歪みを利用した水深の推定と水を媒体とするインタラクションへの応用,” インタラクション2019論文集, 3P-76, pp. 972-973, 2019.02
                </>}
            
        />
    </ContentsWrapper>
  </Layout>
);

export default AquaSynthesizerPage;