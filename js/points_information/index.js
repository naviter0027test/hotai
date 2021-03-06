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
                <div className="outer">
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="brand">
                            <a href="javascript:;"><img src="images/header_logo.png" /></a>
                        </div>
                    </div>            
                    <div className="col">
                    </div>
                </div>  	      
            </div>
            <div className="bottom_div">
                <div className="outer">
                    <h1>企業資料</h1>
                </div>
            </div>   
        </div>

        <div className="main_div">
            <div className="points_information">    	
                <div className="corp_info">
                    <div className="outer">
                        <div className="info">
                            說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資<br />
                            資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明<br />
                            說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料說明資料
                        </div>
                        <div className="item">                    
                            <span>聯絡人：<b>李哈哈</b></span>
                        </div> 
                        <div className="item">
                            <span>統一編號：<b>#12345678</b></span>                    
                        </div>    
                        <div className="item">
                            <span>公司中文：<b>哈哈集團股份有限公司</b></span>
                        </div>
                        <div className="item">
                            <span>公司英文：<b>Haha International Co., LTD</b></span>
                        </div>
                        <div className="item">
                            <span>序號類型：<b>電子點數序號</b></span>
                        </div> 
                    </div>               
                </div>

                <div className="point_info">
                    <div className="point_title">
                        <div className="outer">
                            <div className="col01">當期帳戶總點數</div>
                            <div className="col02"><big>21011</big> 點</div>
                        </div>
                    </div>
                    <div className="info_list">
                        <div className="outer">
                            <div className="item">
                                <div className="col01">
                                    <input className="point" type="text" value="5000點" readonly="readonly" />
                                    <span className="multiply">X</span>
                                    <button className="btn_subtract"></button>
                                    <span className="sub_tottal_point"><big>2</big>張</span>
                                    <button className="btn_add"></button>                            
                                </div>
                                <div className="col02">
                                    <span>=</span>
                                    <span><big>10000</big> 點</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col01">
                                    <input className="point" type="text" value="1000點"  readonly="readonly" />
                                    <span className="multiply">X</span>
                                    <button className="btn_subtract"></button>
                                    <span className="sub_tottal_point"><big>8</big>張</span>
                                    <button className="btn_add"></button>                            
                                </div>
                                <div className="col02">
                                    <span>=</span>
                                    <span><big>8000</big> 點</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col01">
                                    <input className="point" type="text" value="500點" readonly="readonly" />
                                    <span className="multiply">X</span>
                                    <button className="btn_subtract"></button>
                                    <span className="sub_tottal_point"><big>2</big>張</span>
                                    <button className="btn_add"></button>
                                </div>
                                <div className="col02">
                                    <span>=</span>
                                    <span><big>1000</big> 點</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col01">
                                    <input className="point" type="text" value="100點"  readonly="readonly" />
                                    <span className="multiply">X</span>
                                    <button className="btn_subtract"></button>
                                    <span className="sub_tottal_point gray"><big>0</big>張</span>
                                    <button className="btn_add"></button>                            
                                </div>
                                <div className="col02">
                                    <span>=</span>
                                    <span><big>0</big> 點</span>
                                </div>
                            </div>
                            <div className="item hide_calculation">
                                <div className="col01">
                                    <input className="point" type="text" value="11點"  readonly="readonly" />
                                    <span className="multiply">X</span>
                                    <button className="btn_subtract"></button>
                                    <span className="sub_tottal_point"><big>1</big>張</span>
                                    <button className="btn_add"></button>                            
                                </div>
                                <div className="col02">
                                    <span>=</span>
                                    <span><big>11</big> 點</span>
                                </div>
                            </div>
                            <div className="item sub_total calculation">
                                <div className="col01"><span>面額張數</span><span>13 張</span></div>
                                <div className="col02"><span>兌換總點數</span><span>19011 點</span></div>            
                            </div>
                            <div className="item subtract_total calculation">
                                <div className="col01"><span></span><span></span></div>
                                <div className="col02"><span>未兌換點數</span><span><big>2011</big> 點</span></div>            
                            </div>	
                        </div>
                    </div>
                    <div className="action">
                        <div className="outer">
                            <button className="btn btn_cancel">重新填寫</button>
                            <button className="btn btn_send">確認送出</button>
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
