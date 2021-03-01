import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';
import WorkYoutube from 'atoms/works/WorkYoutube';

const KazeokePage = () => (
  <Layout title="風が吹けば桶屋が桶屋が儲かる">
    <ContentsWrapper>
        <WorkHeader title="風が吹けば桶屋が桶屋が儲かる" />
        <WorkDescription>
            <p>
            　「風が吹けば桶屋が儲かる」はことわざをモチーフにしたデジタルアート作品です。鑑賞者の目の前に置かれたのれんに息を吹きかけると、映像の中のお金が右に左に移動します。上手く息を吹く方向を調整して、桶の中にお金を入れることを目指します。「風が吹けば桶屋が儲かる」ということわざは、一見関係していないと思える事象に影響を与えることを意味しますが、この作品では息を吹きかけるという行為が直接的にお金が儲かるという事象に繋がります。この作品は一種のゲームのようでありながら、ことわざに対するアンチテーゼの側面も持っています。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/kazeoke/kazeoke_2.jpg",
             "/images/works/individual/kazeoke/kazeoke_1.jpg",
             "/images/works/individual/kazeoke/kazeoke_3.jpg"
        ]} />
        <WorkYoutube 
            VideoID={"p9KBSNagYlo"}
        />
        <WorkInfo 
            period="2019/07 - 2019/08"
            technologies="Python / Processing"
            member="1名"
            responsible="企画立案から実装、展示まですべてを担当"
            others={<>
                クリエイティブキッズキャンプ2019にて展示
                </>}
            
        />
    </ContentsWrapper>
  </Layout>
);

export default KazeokePage;