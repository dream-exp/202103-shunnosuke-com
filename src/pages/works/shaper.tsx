import Layout from 'components/common/Layout';
import ContentsWrapper from 'components/common/ContentWrapper';
import WorkHeader from 'atoms/works/WorkHeader';
import WorkDescription from 'atoms/works/WorkDescription';
import WorkImages from 'atoms/works/WorkImages';
import WorkInfo from 'atoms/works/WorkInfo';

const ShaperPage = () => (
  <Layout title="論文翻訳支援ツール「Shaper」">
    <ContentsWrapper>
        <WorkHeader title="論文翻訳支援ツール「Shaper」" />
        <WorkDescription>
            <p>
            英語論文を読む際に、Google翻訳やDeepLを利用している方は多いと思います。PDFで配布されている英語論文をコピーアンドペーストすると、行末のハイフネーションや改行が混ざっていて翻訳ミスが発生することが多くあります。「Shaper」は、こうした不要な文字による翻訳ミスをなくすためにハイフネーションや改行を自動で取り除くWebアプリです。
            </p>
            <p>
                <a href="https://dream-exp.net/shaper" target="blank" >リンク：論文翻訳支援ツール「Shaper」</a>
                <br />
                <a href="https://dream-exp.hatenablog.com/entry/2017/07/22/shaper" target="blank">リンク：「Shaper」の使い方</a>
            </p>
            <p>
            Shaperはもともと僕自身が英語論文を読む際に困っていたことを解決するために生まれたアプリです。Webアプリとしてネットに公開していたところ、医学・薬学系のユーザーの皆さまを中心に利用者が急増し、現在では毎月およそ1万5千人のユーザー様にご利用いただいています。
            </p>
            <p>
            Shaperはユーザーの声を聞きつつ、翻訳後に入力した項目がクリアされるようにしたり、論文翻訳ツールにワンクリックでリダイレクトするようにするなど様々なアップデートを加えてきました。
            </p>
        </WorkDescription>
        <WorkImages imagePaths={[
             "/images/works/individual/shaper/shaper_1.png",
             "/images/works/individual/shaper/shaper_2.png"
        ]} />
        <WorkInfo 
            period="2017/07"
            technologies="React.js"
            member="1名"
            responsible="企画立案から実装まで一貫して担当"
            others={<>
                <a href="https://www.yodosha.co.jp/yodobook/book/9784758116473/">『レジデントノート』 2020年8月号 Vol.22 No.7 </a>にて、本アプリが紹介されました<br />
                2021年2月度において、MAU 1万6千人、6万3千PVを記録
                </>}
            
        />
    </ContentsWrapper>
  </Layout>
);

export default ShaperPage;