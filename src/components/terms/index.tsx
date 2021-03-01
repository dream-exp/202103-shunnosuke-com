import styled from 'styled-components';
import ContentsWrapper from 'components/common/ContentWrapper';
import media from 'styled-media-query';

const Terms = () => {
    return(
        <ContentsWrapper>
            <TermsComponent>
            <p className="analytics-description">当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/">Googleアナリティクスサービス利用規約のページ</a>や<a href="https://policies.google.com/technologies/ads?hl=ja">Googleポリシーと規約ページ</a>をご覧ください。
            </p>
            </TermsComponent>
        </ContentsWrapper>
    );
}

const TermsComponent = styled.div`
    width: 100%;

    ${media.lessThan("medium")`
        p {
            font-size: 13px;
            line-height: 3em;
        }
    `}

    ${media.greaterThan("medium")`
        p {
            line-height: 2.5em;
        }
    `}

    a {
        text-decoration: underline;
    }

`;

export default Terms;