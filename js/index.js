import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
    <div>

        <div className="header_div">
            <div className="top_div">
                <div class="outer">
                    <div class="col">
                    </div>
                    <div class="col">
                        <div class="brand">
                            <a href="javascript:;">
                                <img src="images/header_logo.png" />
                            </a>
                        </div>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
            <div className="bottom_div">
                <div className="outer">
                        <h1>填寫企業資料</h1>
                </div>
            </div>   
        </div>
        <div className="main_div">
            <div className="fill_in_company_information">
                <div className="outer">
                    <div className="info">
                    說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資<br />
                    資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明<br />
                    說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料
                    </div>
                    <div className="keyin_div">
                        <div className="item sub_title"><b>企業資料</b>(請依營業登記證上登錄之資料填寫)</div>
                        <div className="item">
                            <div className="row two_col">
                                <div className="col">
                                    <div className="label">公司中文名稱</div>
                                    <div className="controller"><input type="text" /></div>
                                </div>
                                <div className="col">
                                    <div className="label">公司英文名稱</div>
                                    <div className="controller"><input type="text" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="row two_col">
                                <div className="col">
                                    <div className="label">統一編號</div>
                                    <div className="controller"><input type="text" /></div>
                                </div>
                                <div className="col">
                                    <div className="label">公司負責人</div>
                                    <div className="controller"><input type="text" /></div>
                                </div>
                            </div>    
                        </div>

                        <div className="item">
                            <div className="row three_col">
                                <div className="col">
                                    <div className="label">公司地址</div>
                                    <div className="controller">
                                        <div className="select_option" onclick="set_select('address');">
                                            <select id="address">
                                                <option className="dark_gray">請選擇縣市</option>
                                                <option className="dark_gray">縣市001</option>
                                                <option className="dark_gray">縣市002</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="label"></div>
                                    <div className="controller">
                                        <div className="select_option"  onclick="set_select('area');">
                                            <select id="area">
                                                <option className="dark_gray">請選擇區域</option>
                                                <option className="dark_gray">區域001</option>
                                                <option className="dark_gray">區域002</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="label"></div>
                                    <div className="controller"><input type="text" placeholder="郵遞區號" /></div>
                                </div>
                            </div> 
                            <div className="controller margin_top_01"><input type="text" placeholder="請輸入詳細地址" /></div>   

                        </div>

                        <div className="item sub_title"><b>企業聯絡人資料</b></div>
                        <div className="item">
                            <div className="label">姓名</div>
                            <div className="controller"><input type="text" /></div>   
                        </div>

                        <div className="item">
                            <div className="row two_col">
                                <div className="col">
                                    <div className="label">部門</div>
                                    <div className="controller"><input type="text" /></div>
                                </div>
                                <div className="col">
                                    <div className="label">職稱</div>
                                    <div className="controller"><input type="text" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="label">公司電話</div>
                            <div className="controller"><input type="text" /></div>   
                        </div>

                        <div className="item">
                            <div className="label">Email</div>
                            <div className="controller"><input type="email" /></div>   
                        </div>

                        <div className="item sub_title"><b>序號類型</b></div>
                        <div className="item">                	
                            <div className="controller radio_container_outer">
                                <div className="radio_inline">
                                    <label className="radio_container">電子序號
                                        <input type="radio" name="series" checked="checked" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="radio_inline">
                                    <label className="radio_container">實體卡
                                        <input type="radio" name="series" />
                                        <span className="checkmark"></span>
                                        <i>‧當期總點數不足一萬點時， 仍以電子序號方式寄送。 ‧實體卡寄送前將先扣除卡片成本。</i>
                                    </label>
                                </div>
                            </div>          
                        </div>

                        <div className="item">
                            <div className="label">注意事項</div>
                            <div className="controller">
                                <textarea>注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意事項文字注意
                                </textarea>
                            </div>   
                        </div>

                        <div className="item">
                            <div className="controller">
                                <label className="checkbox_container">我已清楚閱讀相關注意事項
                                    <input type="checkbox" checked="checked" onclick="toggle_send('#btn_send');" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="item action">
                            <button id="btn_send" className="btn_send" onclick="set_popup_active('#popup01');">確認送出</button>

                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div className="footer_div">	
            <div className="outer">    	
                <div className="col">
                    HOTAI GROUP<br />
                    4F, NO. 68, CHOU TZE ST., NEI HU DIST., TAIPEI, TAIWAN R. O. C.<br />
                    TEL : +886-2-87973456(REP.)  FAX : +886-2-87973350<br />
                    E-mail address : <a href="mailto:hotai@mail.hotai.com.tw">hotai@mail.hotai.com.tw</a>
                </div>
                <div className="col">
                    <div>Copyright © 2015 Hotai Group. All rights reserved.</div>
                    <div>
                        Feel free to contact us if you have any inquires about our services or products.<br />
                        We would also like to hear your comments.
                    </div>
                </div>
            </div>
        </div>    

        <div className="body_overly"></div>
        <div className="popup_div" id="popuo01">
            <div className="outer">
                <div className="download_div">

                    <div className="box">
                        <div className="title">
                            <img src="images/corp_logo.png" />
                            <h2>企業會員申請書下載</h2>
                        </div>
                        <div className="info">
                            <ol>
                                <li>請將申請書下載並進行用印，再將正本寄回104台北市中山區松江路433號12樓【和泰點數中心(和泰聯網產品運營部)收】。</li>
                                <li>會員申請審核完成，將會發送電子郵件至企業聯絡人Mail信箱。</li>
                            </ol>                
                        </div>
                        <div className="action">
                            <button className="btn btn_back" onclick="set_popup_hide('#popup01');">返回</button>
                            <button className="btn btn_download">確認下載</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
