import styled from 'styled-components';
import ContentsWrapper from 'components/common/ContentWrapper';
import media from 'styled-media-query';

const Profile = () => {
    return(
        <ContentsWrapper>
            <ProfileComponent>
                <ProfileGeneral>
                    <div className="info">
                        <div>
                            <h2>片岡 駿之介</h2>
                            <span>Shunnosuke Kataoka</span>
                        </div>
                        <p>
                        1996年、山口県山口市出身。徳山工業高等専門学校専攻科を経て、筑波大学大学院図書館情報メディア研究科博士前期課程修了。<br />
                        高専在学中にU-22プログラミング・コンテストにて経済産業省商務情報政策局長賞を受賞。2019年より、ピクシーダストテクノロジーズ株式会社にてエンジニアとして従事し、建設現場向けアプリケーションの開発に携わる。2020年、山口県の地域・企業における課題をITを利用して解決するエンドルフィニクス合同会社を設立。2022年、ソニーグループ株式会社R＆Dセンター入社。<br />
                        中学生の時から写真を趣味としており、2020年に初の個展「碧の風景」を開催。2021年6月度 日本カメラ月例フォトコンテスト Webの部 入選。
                        </p>
                    </div>
                    <div className="profile_img">
                        <img src="/images/profile.png" />
                    </div>
                </ProfileGeneral>
                <Topics>
                    <h3>CONTACT</h3>
                    <div>
                        <p className="topic_head with_img">
                            <img src="/images/mail_icon.png" className="topic_img" />
                        </p>
                        <p className="topic_text">
                            dreamexp834[at]gmail.com
                        </p>
                    </div>
                </Topics>
                <Topics>
                    <h3>EDUCATIONS</h3>
                    <div>
                        <p className="topic_head">2012 - 2017</p>
                        <p className="topic_text">徳山工業高等専門学校 情報電子工学科（古賀崇了 研究室）</p>
                    </div>
                    <div>
                        <p className="topic_head">2017 - 2019</p>
                        <p className="topic_text">徳山工業高等専門学校 専攻科 情報電子工学専攻（古賀崇了 研究室）</p>
                    </div>
                    <div>
                        <p className="topic_head">2019 - 2022</p>
                        <p className="topic_text">筑波大学大学院 図書館情報メディア研究科（落合陽一 研究室）</p>
                    </div>
                </Topics>
                <Topics>
                    <h3>WORK EXPERIENCES</h3>
                    <div>
                        <p className="topic_head">2019 - 2020</p>
                        <p className="topic_text">PixieDustTechnologies, Inc. (Part-Time Engineer)</p>
                    </div>
                    <div>
                        <p className="topic_head">2020 - 2022</p>
                        <p className="topic_text">PixieDustTechnologies, Inc. (Full-Time Engineer)</p>
                    </div>
                    <div>
                        <p className="topic_head">2020 -</p>
                        <p className="topic_text">EndorphiniX, Inc. (Founder / Engineer)</p>
                    </div>
                    <div>
                        <p className="topic_head">2022 -</p>
                        <p className="topic_text">Sony Group Corporation R＆D Center (Full-Time R＆D Engineer)</p>
                    </div>
                </Topics>
                <Topics>
                    <h3>INTERNSHIP</h3>
                    <div>
                        <p className="topic_head">2015 (1week)</p>
                        <p className="topic_text">DMM.com Labo</p>
                    </div>
                    <div>
                        <p className="topic_head">2016 (1week)</p>
                        <p className="topic_text">CyberAgent</p>
                    </div>
                    <div>
                        <p className="topic_head">2017 (2weeks)</p>
                        <p className="topic_text">pixiv</p>
                    </div>
                    <div>
                        <p className="topic_head">2017 (4weeks)</p>
                        <p className="topic_text">CyberAgent</p>
                    </div>
                    <div>
                        <p className="topic_head">2019 (3weeks)</p>
                        <p className="topic_text">Sony Semiconductor Solutions</p>
                    </div>
                    <div>
                        <p className="topic_head">2020 (3weeks)</p>
                        <p className="topic_text">Sony R&D Center</p>
                    </div>
                </Topics>
                <Topics>
                    <h3 id="awards">AWARDS</h3>
                    <div>
                        <p className="topic_head">2012</p>
                        <p className="topic_text">山陽新幹線「新大阪〜岡山」開業40周年「新幹線の思い出写真コンテスト」優秀賞 / 特別賞</p>
                    </div>
                    <div>
                        <p className="topic_head">2013</p>
                        <p className="topic_text">第24回 全国高等専門学校プログラミングコンテスト 敢闘賞</p>
                    </div>
                    <div>
                        <p className="topic_head">2014</p>
                        <p className="topic_text">パソコン甲子園2014 モバイル部門 本戦出場</p>
                    </div>
                    <div>
                        <p className="topic_head">2015</p>
                        <p className="topic_text">第26回 全国高等専門学校プログラミングコンテスト 敢闘賞</p>
                    </div>
                    <div>
                        <p className="topic_head">2016</p>
                        <p className="topic_text">
                            U-22 プログラミング・コンテスト2016 経済産業省商務情報政策局長賞 / 企業賞
                        </p>
                    </div>
                    <div>
                        <p className="topic_head">2016</p>
                        <p className="topic_text">独立行政法人国立高等専門学校機構 理事長表彰</p>
                    </div>
                    <div>
                        <p className="topic_head">2017</p>
                        <p className="topic_text">徳山工業高等専門学校 文化功労賞</p>
                    </div>
                    <div>
                        <p className="topic_head">2017</p>
                        <p className="topic_text">KOSENハッカソン@函館 スポンサー企業賞</p>
                    </div>
                    <div>
                        <p className="topic_head">2018</p>
                        <p className="topic_text">中国地区高専コンピュータフェスティバル アプリケーション部門 第一位</p>
                    </div>
                    <div>
                        <p className="topic_head">2018</p>
                        <p className="topic_text">石巻ハッカソン in 周南市 グランプリ</p>
                    </div>
                    <div>
                        <p className="topic_head">2021</p>
                        <p className="topic_text">日本カメラ 月例フォトコンテスト 6月号 Webの部 入選</p>
                    </div>
                </Topics>
                <Topics>
                    <h3>PUBLICATIONS</h3>
                    <div>
                        <p className="topic_head">原著論文<br />(査読あり)</p>
                        <p className="topic_text">Shunnosuke Kataoka, Noriaki Suetake and Takanori Koga, “Water Depth Estimation Using Measurement Distortion of Time-of-Flight Camera and Its Application to Interactive Art,” Innovative Computing, Information and Control Express Letters (ICIC Express Letters), Part B: Applications, Vol.12, No.7, 2021.07</p>
                    </div>
                    <div>
                        <p className="topic_head">技術研究報告<br />(査読なし)</p>
                        <p className="topic_text">片岡 駿之介, 古賀 崇了, “室内環境におけるToFカメラを用いた水深の多点同時測定に関する検討,” 信学技報, vol. 118, no. 346, SIS2018-24, pp. 17-20, 2018.12</p>
                    </div>
                    <div>
                        <p className="topic_head">口頭発表<br />(査読なし)</p>
                        <p className="topic_text">片岡 駿之介, 古賀 崇了, “ToFカメラの計測歪みを利用した水深の推定と水を媒体とするインタラクションへの応用,” インタラクション2019論文集, 3P-76, pp. 972-973, 2019.02</p>
                    </div>
                </Topics>
                <Topics>
                    <h3>EXHIBITIONS</h3>
                    <div>
                        <p className="topic_head">2019</p>
                        <p className="topic_text">「かばんの中身と個性」 1/100展（2019年度 筑波大学大学院 コンテンツ制作論）</p>
                    </div>
                    <div>
                        <p className="topic_head">2020</p>
                        <p className="topic_text">写真展「碧の風景」（コーヒーボーイ下松店）</p>
                    </div>
                </Topics>
                <Topics>
                    <h3>MEDIA</h3>
                    <div>
                        <p className="topic_text">『新幹線EX Vol.21』写真掲載, イカロス出版, 2011.10.21</p>
                    </div>
                    <div>
                        <p className="topic_text">『新幹線EX Vol.22』写真掲載, イカロス出版, 2012.01.21</p>
                    </div>
                    <div>
                        <p className="topic_text">『新幹線EX Vol.23』写真掲載, イカロス出版, 2012.04.21</p>
                    </div>
                    <div>
                        <p className="topic_text">「情報維新！やまぐち」, https://www.nhk.or.jp/yamaguchi/ishin/, NHK山口放送局, 2017.11.16</p>
                    </div>
                    <div>
                        <p className="topic_text">「夢色アサンブラ vol.125 徳山高専 片岡駿之介さん・松村俊志さん」, シティケーブル周南, 2018.07.20</p>
                    </div>
                    <div>
                        <p className="topic_text">「FUTURES 落合陽一 RADIO PIXIE DUST」, JFN系列, 2019.10.21</p>
                    </div>
                    <div>
                        <p className="topic_text">「県人アワー ふるさとdeつなごう！」, KRYラジオ, 2020.03.25</p>
                    </div>
                    <div>
                        <p className="topic_text">「株式会社トクヤマ 社内報 『あした葉』 No.651」, 株式会社トクヤマ, 2020.09</p>
                    </div>
                    <div>
                        <p className="topic_text">「高専から筑波大編入で起業 -現役学生起業家によるトークイベント-」, つくばスタートアップパーク, 2020.09.08</p>
                    </div>
                </Topics>
                <Topics>
                    <h3>OTHERS</h3>
                    <div>
                        <p className="topic_head">2016</p>
                        <p className="topic_text">基本情報技術者試験 合格</p>
                    </div>
                    <div>
                        <p className="topic_head">2018</p>
                        <p className="topic_text">TOEIC 705点</p>
                    </div>
                </Topics>
            </ProfileComponent>
        </ContentsWrapper>
    );
}

const Topics = styled.div`
    width: 100%;
    margin-bottom: 60px;

    ${media.lessThan("medium")`
        h3 {
            font-size: 25px;
            margin: 17px 0;
            letter-spacing: 0.2em;
            font-family: 'NTR', 'Noto Sans JP', sans-serif;
        }
    `}

    ${media.greaterThan("medium")`
        h3 {
            font-size: 30px;
            margin: 20px 0;
            letter-spacing: 0.2em;
            font-family: 'NTR', 'Noto Sans JP', sans-serif;
        }
    `}

    div {
        font-family: 'Noto Sans JP', sans-serif, 'NTR';

        ${media.lessThan("medium")`
            margin: 35px 0;
        `}

        ${media.greaterThan("medium")`
            margin: 30px 0;
            display: flex;
        `}

        p {
            font-family: 'Noto Sans JP', sans-serif;
            letter-spacing: 0.15em;

            a {
                &:hover {
                    transition: 0.3s ease;
                    color: #cccccc;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }

            img {
                height: 25px;
            }
        }

        ${media.lessThan("medium")`
            p.topic_head {
                width: 100%;
                margin-bottom: 10px;
                font-size: 10px;
            }

            p.topic_text {
                width: 100%;
                font-size: 13px;
            }
        `}

        ${media.greaterThan("medium")`
            p {
                font-size: 13px;
                line-height: 28px;
            }

            p.with_img {
                display: flex;
                align-items: center;
            }

            p.topic_head {
                width: 15%;
            }

            p.topic_text {
                width: 100%;
            }
        `}
    }

`

const ProfileComponent = styled.div`
    width: 100%;
`;

const ProfileGeneral = styled.div`
    width: 100%;

    ${media.lessThan("medium")`
        margin: 20px 0 50px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    `}

    ${media.greaterThan("medium")`
        margin: 50px 0 100px;
        display: flex;
        justify-content: space-between;
    `}

    div.info {

        ${media.lessThan("medium")`
            width: 100%;
        `}

        ${media.greaterThan("medium")`
            width: 55%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}

        div {
            ${media.lessThan("medium")`
            margin-bottom: 20px;            

                h2 {
                    font-size: 25px;
                    letter-spacing: 0.2em;
                    margin-bottom: -10px;
                }

                span {
                    font-size: 18px;
                    letter-spacing: 0.1em;
                    font-family: 'NTR', 'Noto Sans JP', sans-serif;
                }
            `}

            ${media.greaterThan("medium")`
                h2 {
                    font-size: 40px;
                    letter-spacing: 0.3em;
                    margin-bottom: -10px;
                }

                span {
                    font-size: 25px;
                    letter-spacing: 0.1em;
                    font-family: 'NTR', 'Noto Sans JP', sans-serif;
                }
            `}
        }

        ${media.lessThan("medium")`
            p {
                font-size: 13px;
                line-height: 30px;
            }
        `}

        ${media.greaterThan("medium")`
            p {
                font-size: 13px;
                line-height: 30px;
            }
        `}
    }

    ${media.lessThan("medium")`
        div.profile_img {
            width: 100%;
            margin-bottom: 40px;
            
            img {
                width: 75%;
                height: auto;
                display: block;
                margin: 0 auto;
            }
        }
    `}

    ${media.greaterThan("medium")`
        div.profile_img {
            width: 35%;
            
            img {
                width: 100%;
            }
        }
    `}

`;

export default Profile;

