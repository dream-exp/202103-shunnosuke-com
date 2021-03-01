import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';
import WorkYoutube from 'atoms/works/WorkYoutube';

const SoarPage = () => (
  <Layout title="SOAR">
    <ContentsWrapper>
        <WorkHeader title="SOAR" />
        <WorkDescription>
            <p>
            SOAR(ソアー)は、日常生活の中でふとした瞬間に季節を感じることが できるメディアアートです。ディスプレイの前を人が通ると、その動きに合わせてディスプレイ内の葉っぱが舞い上がります。SOAR は 2017 年の徳山高専オープンキャンパスの展示作品として制作されました。私は高専での学びを通じて、コンピュータを学ぶことがゴールなのではなく、コンピュータを使って何を作るかが大切だということに気付きました。このマインドを、オープンキャンパスに来ているエンジニア志望の中学生にも知ってほしいという思いから、この作品のコンセプトを「コンピュータらしさをできる限り無くす」としました。なぜ、コンピュータらしさを無くしたのか。 それは、この作品を目にした時の純粋な好奇心を持って、コンピュータを学んでほしいからです。こんな面白い作品がプログラミングで作れるんだ、という体験を大切に、エンジニアを目指してほしいからです。コンピュータらしさを無くすこととして、展示の際は鑑賞者の動きを検知するカメラやコンピュータ、配線などを隠す工夫を行いました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/soar/soar_1.jpg",
             "/images/works/individual/soar/soar_2.png"
        ]} />
        <WorkDescription>
            <p>
            高専専攻科1年次に、2名のチームで制作。企画立案とアートディレクションを担当。例年、本校でのオープンキャンパスの展示内容がワンパターンになってしまっていたたと感じ、プログラミングを用いた面白い作品を作ることができないか考え、制作されました。
            </p>
        </WorkDescription>
        <WorkYoutube 
            VideoID={"LRYY6mxZe4M"}
        />
        <WorkInfo 
            period="2017/07 - 2017/11"
            technologies="Unity / Python"
            member="2名"
            responsible="企画立案とアートディレクションを担当"
            others={<>
                徳山高専オープンキャンパス 2017/2018にて展示<br/>
                NHK山口・情報維新やまぐちにて紹介<br />
                シティーケーブル周南「夢色アサンブラ」にて紹介
                </>}
            
        />
    </ContentsWrapper>
  </Layout>
);

export default SoarPage;