Search.setIndex({envversion:47,filenames:["appendix","beginner-tutorial","bundles","index","install","release-process","releases"],objects:{"zipline.api":{EODCancel:[0,6,1,""],NeverCancel:[0,6,1,""],attach_pipeline:[0,6,1,""],cancel_order:[0,6,1,""],date_rules:[0,7,1,""],fetch_csv:[0,6,1,""],future_chain:[0,6,1,""],future_symbol:[0,6,1,""],get_environment:[0,6,1,""],get_open_orders:[0,6,1,""],get_order:[0,6,1,""],order:[0,6,1,""],order_percent:[0,6,1,""],order_target:[0,6,1,""],order_target_percent:[0,6,1,""],order_target_value:[0,6,1,""],order_value:[0,6,1,""],pipeline_output:[0,6,1,""],record:[0,6,1,""],schedule_function:[0,6,1,""],set_benchmark:[0,6,1,""],set_cancel_policy:[0,6,1,""],set_commission:[0,6,1,""],set_do_not_order_list:[0,6,1,""],set_long_only:[0,6,1,""],set_max_leverage:[0,6,1,""],set_max_order_count:[0,6,1,""],set_max_order_size:[0,6,1,""],set_max_position_size:[0,6,1,""],set_slippage:[0,6,1,""],set_symbol_lookup_date:[0,6,1,""],sid:[0,6,1,""],symbol:[0,6,1,""],symbols:[0,6,1,""],time_rules:[0,7,1,""]},"zipline.api.date_rules":{every_day:[0,8,1,""],month_end:[0,9,1,""],month_start:[0,9,1,""],week_end:[0,9,1,""],week_start:[0,9,1,""]},"zipline.api.time_rules":{every_minute:[0,8,1,""],market_close:[0,8,1,""],market_open:[0,8,1,""]},"zipline.assets":{Asset:[0,7,1,""],AssetConvertible:[0,7,1,""],AssetDBWriter:[0,7,1,""],AssetFinder:[0,7,1,""],Equity:[0,7,1,""],Future:[0,7,1,""]},"zipline.assets.Asset":{first_traded:[0,8,1,""],from_dict:[0,10,1,""],is_alive_for_session:[0,10,1,""],is_exchange_open:[0,10,1,""],to_dict:[0,10,1,""]},"zipline.assets.AssetDBWriter":{init_db:[0,10,1,""],write:[0,10,1,""]},"zipline.assets.AssetFinder":{equities_sids:[0,8,1,""],futures_sids:[0,8,1,""],group_by_type:[0,10,1,""],lifetimes:[0,10,1,""],lookup_asset_types:[0,10,1,""],lookup_future_chain:[0,10,1,""],lookup_future_symbol:[0,10,1,""],lookup_generic:[0,10,1,""],lookup_symbol:[0,10,1,""],map_identifier_index_to_sids:[0,10,1,""],reload_symbol_maps:[0,10,1,""],retrieve_all:[0,10,1,""],retrieve_asset:[0,10,1,""],retrieve_equities:[0,10,1,""],retrieve_futures_contracts:[0,10,1,""],sids:[0,8,1,""]},"zipline.assets.Equity":{security_end_date:[0,8,1,""],security_name:[0,8,1,""],security_start_date:[0,8,1,""]},"zipline.assets.Future":{to_dict:[0,10,1,""]},"zipline.data.bundles":{bundles:[0,11,1,""],ingest:[0,6,1,""],load:[0,6,1,""],register:[0,6,1,""],unregister:[0,6,1,""],yahoo_equities:[0,6,1,""]},"zipline.data.data_portal":{DataPortal:[0,7,1,""]},"zipline.data.data_portal.DataPortal":{get_adjusted_value:[0,10,1,""],get_adjustments:[0,10,1,""],get_fetcher_assets:[0,10,1,""],get_history_window:[0,10,1,""],get_last_traded_dt:[0,10,1,""],get_splits:[0,10,1,""],get_spot_value:[0,10,1,""],get_stock_dividends:[0,10,1,""],handle_extra_source:[0,10,1,""]},"zipline.data.minute_bars":{BcolzMinuteBarReader:[0,7,1,""],BcolzMinuteBarWriter:[0,7,1,""]},"zipline.data.minute_bars.BcolzMinuteBarReader":{get_value:[0,10,1,""],load_raw_arrays:[0,10,1,""],table_len:[0,10,1,""]},"zipline.data.minute_bars.BcolzMinuteBarWriter":{last_date_in_output_for_sid:[0,10,1,""],pad:[0,10,1,""],set_sid_attrs:[0,10,1,""],sidpath:[0,10,1,""],write:[0,10,1,""],write_cols:[0,10,1,""],write_sid:[0,10,1,""]},"zipline.data.us_equity_pricing":{BcolzDailyBarReader:[0,7,1,""],BcolzDailyBarWriter:[0,7,1,""],SQLiteAdjustmentReader:[0,7,1,""],SQLiteAdjustmentWriter:[0,7,1,""]},"zipline.data.us_equity_pricing.BcolzDailyBarReader":{get_value:[0,10,1,""],sid_day_index:[0,10,1,""]},"zipline.data.us_equity_pricing.BcolzDailyBarWriter":{write:[0,10,1,""],write_csvs:[0,10,1,""]},"zipline.data.us_equity_pricing.SQLiteAdjustmentWriter":{calc_dividend_ratios:[0,10,1,""],write:[0,10,1,""],write_dividend_data:[0,10,1,""],write_dividend_payouts:[0,10,1,""]},"zipline.finance.cancel_policy":{CancelPolicy:[0,7,1,""]},"zipline.finance.cancel_policy.CancelPolicy":{should_cancel:[0,10,1,""]},"zipline.finance.commission":{CommissionModel:[0,7,1,""],PerDollar:[0,7,1,""],PerShare:[0,7,1,""],PerTrade:[0,7,1,""]},"zipline.finance.commission.CommissionModel":{calculate:[0,10,1,""]},"zipline.finance.execution":{ExecutionStyle:[0,7,1,""],LimitOrder:[0,7,1,""],MarketOrder:[0,7,1,""],StopLimitOrder:[0,7,1,""],StopOrder:[0,7,1,""]},"zipline.finance.execution.ExecutionStyle":{exchange:[0,8,1,""],get_limit_price:[0,10,1,""],get_stop_price:[0,10,1,""]},"zipline.finance.slippage":{FixedSlippage:[0,7,1,""],SlippageModel:[0,7,1,""],VolumeShareSlippage:[0,7,1,""]},"zipline.finance.slippage.SlippageModel":{process_order:[0,8,1,""]},"zipline.pipeline":{CustomFactor:[0,7,1,""],Pipeline:[0,7,1,""]},"zipline.pipeline.Pipeline":{add:[0,10,1,""],columns:[0,8,1,""],remove:[0,10,1,""],screen:[0,8,1,""],set_screen:[0,10,1,""],show_graph:[0,10,1,""],to_execution_plan:[0,10,1,""],to_simple_graph:[0,10,1,""]},"zipline.pipeline.data":{USEquityPricing:[0,7,1,""]},"zipline.pipeline.data.USEquityPricing":{close:[0,8,1,""],high:[0,8,1,""],low:[0,8,1,""],open:[0,8,1,""],volume:[0,8,1,""]},"zipline.pipeline.factors":{AverageDollarVolume:[0,7,1,""],BollingerBands:[0,7,1,""],ExponentialWeightedMovingAverage:[0,7,1,""],ExponentialWeightedMovingStdDev:[0,7,1,""],Factor:[0,7,1,""],Latest:[0,7,1,""],MaxDrawdown:[0,7,1,""],RSI:[0,7,1,""],Returns:[0,7,1,""],RollingLinearRegressionOfReturns:[0,7,1,""],RollingPearsonOfReturns:[0,7,1,""],RollingSpearmanOfReturns:[0,7,1,""],SimpleMovingAverage:[0,7,1,""],VWAP:[0,7,1,""],WeightedAverageValue:[0,7,1,""]},"zipline.pipeline.factors.Factor":{"__add__":[0,10,1,""],"__div__":[0,10,1,""],"__ge__":[0,10,1,""],"__gt__":[0,10,1,""],"__le__":[0,10,1,""],"__lt__":[0,10,1,""],"__mod__":[0,10,1,""],"__mul__":[0,10,1,""],"__ne__":[0,10,1,""],"__pow__":[0,10,1,""],"__sub__":[0,10,1,""],bottom:[0,10,1,""],eq:[0,10,1,""],isfinite:[0,10,1,""],isnan:[0,10,1,""],notnan:[0,10,1,""],percentile_between:[0,10,1,""],rank:[0,10,1,""],top:[0,10,1,""]},"zipline.pipeline.filters":{Filter:[0,7,1,""]},"zipline.pipeline.filters.Filter":{"__and__":[0,10,1,""],"__or__":[0,10,1,""]},"zipline.protocol":{BarData:[0,7,1,""]},"zipline.utils.cache":{CachedObject:[0,7,1,""],ExpiringCache:[0,7,1,""],dataframe_cache:[0,7,1,""],working_dir:[0,7,1,""],working_file:[0,7,1,""]},"zipline.utils.calendars":{TradingCalendar:[0,7,1,""],clear_calendars:[0,6,1,""],deregister_calendar:[0,6,1,""],get_calendar:[0,6,1,""],register_calendar:[0,6,1,""],register_calendar_type:[0,6,1,""]},"zipline.utils.calendars.TradingCalendar":{is_open_on_minute:[0,10,1,""],is_session:[0,10,1,""],minute_index_to_session_labels:[0,10,1,""],minute_to_session_label:[0,10,1,""],minutes_for_session:[0,10,1,""],minutes_for_sessions_in_range:[0,10,1,""],minutes_in_range:[0,10,1,""],next_close:[0,10,1,""],next_minute:[0,10,1,""],next_open:[0,10,1,""],next_session_label:[0,10,1,""],open_and_close_for_session:[0,10,1,""],previous_close:[0,10,1,""],previous_minute:[0,10,1,""],previous_open:[0,10,1,""],previous_session_label:[0,10,1,""],regular_holidays:[0,8,1,""],session_distance:[0,10,1,""],sessions_in_range:[0,10,1,""],sessions_window:[0,10,1,""],special_closes:[0,8,1,""],special_closes_adhoc:[0,8,1,""],special_opens:[0,8,1,""],special_opens_adhoc:[0,8,1,""]},"zipline.utils.cli":{maybe_show_progress:[0,6,1,""]},zipline:{run_algorithm:[0,6,1,""]}},objnames:{"0":["np","function","Python function"],"1":["np","class","Python class"],"10":["py","method","Python method"],"11":["py","data","Python data"],"2":["np","attribute","Python attribute"],"3":["np","staticmethod","Python static method"],"4":["np","method","Python method"],"5":["np","data","Python data"],"6":["py","function","Python function"],"7":["py","class","Python class"],"8":["py","attribute","Python attribute"],"9":["py","staticmethod","Python static method"]},objtypes:{"0":"np:function","1":"np:class","10":"py:method","11":"py:data","2":"np:attribute","3":"np:staticmethod","4":"np:method","5":"np:data","6":"py:function","7":"py:class","8":"py:attribute","9":"py:staticmethod"},terms:{"000000e":1,"001918e":1,"00pm":6,"01pm":6,"0x7ff5c6147f90":1,"11465d9":6,"1fbf5e9bfd7c4d9cb2e8383e1085":1,"201900e":1,"2ee40db":6,"2nd":0,"367492e":1,"3rd":0,"410420e":1,"513357725cb64a539e3dd02b47da7":1,"533233fae43c7ff74abfb0044f046978817cb4e4":6,"5f49fa2":6,"906000e":1,"977002e":1,"993979e":1,"9ea6b142ff09466b9113331a37437":1,"__add__":0,"__and__":0,"__del__":0,"__div__":0,"__exit__":0,"__ge__":0,"__getitem__":0,"__gt__":0,"__le__":0,"__lt__":0,"__main__":6,"__mod__":0,"__mul__":0,"__name__":6,"__ne__":0,"__or__":0,"__pow__":0,"__repr__":6,"__setitem__":0,"__sub__":0,"__wrapped__":5,"_compute_root_mask":0,"_position_amount":6,"abstract":[0,6],"boolean":[0,2,6],"case":[0,1,2,6],"catch":6,"class":[0,5,6],"default":[0,1],"enum":0,"export":5,"final":[1,2],"float":[0,1,6],"import":[0,1,2,3,5,6],"int":[0,2,6],"long":[0,1,2,6],"new":[0,1],"null":[0,6],"public":0,"return":[0,1,3,5,6],"short":[0,1,6],"static":[0,5,6],"switch":6,"throw":6,"true":[0,6],"try":6,"var":1,"while":[0,5,6],aapl:[0,1,2,3,6],abc:0,abil:2,abl:[1,2,4,6],about:[0,1,2,6],abov:[0,1,3,5,6],absolut:[0,6],abstractholidaycalendar:0,accept:[0,2,5,6],access:0,accident:6,accord:[0,5,6],accordingli:6,account:[0,2,6],achiev:[1,3],acquir:[2,3,4],across:[0,6],act:6,action:[0,6],activ:5,actual:[0,6],add:[0,2,5,6],add_histori:6,add_subplot:1,addit:[0,3,4],address:5,adjust:[0,2,6],adjustment_read:0,adjustment_writ:0,advanc:6,advantag:4,affect:6,aforement:0,after:[0,1,2,5,6],afteropen:0,again:6,against:[0,6],ahead:1,alexand:6,algebra:[3,4],algo:[0,1,2,6],algo_volatil:1,algofil:[1,2],algorithm_period_return:[1,6],algotext:1,alia:[0,6],alias_dt:6,align:[0,6],aliv:0,all:[0,1,2,3,4,5,6],all_api_method:6,all_dat:0,alloc:[0,6],allow:[0,1,2,6],along:[0,2,6],alpha:[0,1,6],alreadi:[0,1,2,4],also:[0,1,2,4,5,6],altern:6,although:1,alwai:[0,2,5,6],amor:6,amount:[0,1,6],amount_charg:0,anaconda:[3,4,5,6],analogu:6,analysi:[3,5],analyt:4,analyz:[0,1,3,6],andrea:6,ani:[0,1,2,3,5,6],announc:[0,6],annual:6,anonym:2,anoth:[1,2,3,4,6],answer:0,anymor:1,anyth:[0,4,5],app:1,appar:1,appear:[0,2,5],append:[5,6],appl:1,appli:[0,1,6],approxim:6,appveyor:[5,6],april:6,apt:[3,4],arbitrari:0,arch:4,architectur:1,arena:[0,6],arg:[0,1,5,6],argument:[0,1,2,5,6],aroon:6,around:[5,6],arrai:[0,3,4,6],art:3,as_of_d:0,ascend:0,ask:1,assess:1,asset_convertible_or_iter:0,asset_db_writ:0,asset_find:[0,6],asset_id:0,asset_map:0,asset_nam:0,assetconvert:0,assetdbwrit:[0,2],assetfind:[0,6],assetfindercachedequ:6,assets_vers:0,assign:[0,6],associ:0,assum:[1,3,4],atla:4,atleastn:6,attach:0,attach_pipelin:0,attempt:[0,2,6],attr:0,attribut:[0,5,6],aur:4,author:6,auto:6,auto_close_d:[0,6],automat:[0,1],avail:[0,1],averag:0,averagedollarvolum:[0,6],avoid:[1,2],awar:[0,5,6],ax1:1,ax2:1,axi:0,back:[0,6],backetest:0,backfil:6,backward:[0,6],bad:6,band:[0,6],bar:[0,1,6],bar_count:[0,6],bardata:[0,6],base:[0,1,2,3,4,6],basi:6,basic:0,batch:6,batch_transform:6,batchtransform:6,batteri:[1,3],bcolz:[0,2,6],bcolzdailybarread:[0,2,6],bcolzdailybarwrit:[0,2,6],bcolzdailyohlcvread:0,bcolzdailyohlcvwrit:0,bcolzfutureminutebarread:0,bcolzminutebarread:[0,2,6],bcolzminutebarwrit:[0,2,6],becaus:[0,3,4,5,6],becom:6,been:[0,1,2,4,5,6],befor:[0,1,2,3,6],before_trading_start:[0,6],beforeclos:0,begin:[0,6],behavior:[0,6],below:[0,1,3,4],benchmark:[0,6],benchmark_period_return:1,benchmark_volatil:1,benefit:1,besid:0,best:4,beta:[0,1,6],better:0,between:[0,6],bia:1,binari:[0,3,4,5,6],bind:0,bit:[3,6],blaze:6,blazeearningscalendarload:6,blazeload:6,bloat:6,block:0,blosc:0,bmf:6,board:6,bolling:[0,6],bollinger_band:[0,6],bollingerband:[0,6],book:1,book_target_perc:6,bool:[0,6],both:[0,3,5,6],bottom:[0,6],bought:1,bound:[0,1],boundari:6,boundcolumn:[0,6],bovespa:6,branch:5,brew:4,brk:0,brk_a:0,broker:0,browser:[1,5],bucket:6,bug:[0,2],bui:[0,1,6],build:[0,3,4,5],built:[0,5,6],builtin:0,bundle_data:0,bundle_timestamp:0,bundledata:0,busi:1,businessdayssincecashbuybackauth:6,businessdayssincedividendannounc:6,businessdayssincepreviousearn:6,businessdayssincepreviousexd:6,businessdayssincesharebuybackauth:6,businessdaysuntilnextearn:6,businessdaysuntilnextexd:6,button:5,buyappl:1,buyapple_out:1,buyback:6,buyback_auth:6,cachedobject:[0,6],cal_nam:0,calc:6,calc_dividend_ratio:0,calcul:[0,1,6],calculate_max_drawdown:6,calendar_nam:0,calendar_offset:0,calendar_typ:0,calendarnamecollis:0,call:[0,1,2,3,6],callabl:0,callback:0,can:[0,1,2,3,4,5,6],can_trad:6,cancel_ord:0,cancel_polici:0,cancelpolici:0,candid:0,cannot:0,cap:6,capabl:[0,1,6],capit:[0,1,6],capital_bas:[0,6],capital_us:1,captur:[1,6],carrai:0,cash:[0,2,6],cashbuybackauthor:6,categor:6,caus:[0,1,2,6],ceiling:6,cell:[1,6],center:3,certain:6,certian:0,chain:[0,6],chanc:1,chang:[0,1,5],channel:[3,4],charg:[0,1,6],check:[0,1,2,6],checker:5,checkout:[1,5],checkpoint:6,choic:[3,5],choos:[4,5],chunk:0,chunk_siz:0,chunksiz:0,classic:1,classifi:[0,1,6],classmethod:6,clean:[0,2,5],clean_on_failur:0,cleaner:6,clear:[0,1,2],clear_calendar:0,cli:[0,1,3,6],click:[0,5],clip:0,clock:6,close:[0,1,6],cloud:6,cmd:1,code:[0,3,5,6],codifi:0,coeffici:0,coerc:6,col:0,colin:6,collect:[0,1,2],collis:0,colnam:0,color:1,column:[0,1,2,6],com:[1,2,3,6],combin:[0,6],come:[2,3,4,6],comingl:6,commis:6,commissionmodel:[0,6],commit:0,common:[0,1,3,6],commonli:[0,1],commun:3,compar:[0,1,6],comparison:[0,6],compat:[0,6],compil:[0,5,6],complex:[0,3,4,6],complic:6,compounded_log_return:6,compress:0,compris:0,comput:[0,1,3,4,6],computed_alpha:0,computed_beta:0,concept:[0,1,6],conceptu:6,concurr:6,conda_build_matrix:5,condit:6,conf:1,config:4,configur:[1,6],conn:0,conn_or_path:0,connect:[0,6],consecut:0,consid:[0,6],consist:[1,6],consract:0,constraint:2,construct:[0,6],constructor:[0,6],consum:[0,5,6],consumpt:0,contain:[0,1,2,6],contan:0,content:1,context:[0,1,3,6],contigu:0,continu:[1,3,6],continuum:4,contract:0,conveni:[0,1],convers:[0,2],convert:[0,2,6],copi:[2,5,6],copy_tre:0,core:[3,4,6],corpor:0,correct:[2,3,4,5,6],correctli:[1,5,6],correl:[0,6],correlation_length:0,correspond:0,cost:[0,1,6],could:[0,1,2,6],couldn:0,count:[0,2,6],coupl:1,cover:[0,6],coveral:6,cpu:6,cpython:[3,4],crash:[2,6],creat:[0,1,2,5,6],create_event_context:6,create_writ:0,criteria:0,csv:[0,6],csv_data_sourc:0,ctabl:0,cubic:0,cumul:6,current:[0,1,2,3,4,5,6],custom:[2,6],customfactor:[0,6],cut:0,cutoff:[0,6],cython:[5,6],d7d4ad03cfec4d578c0d817dc3829:1,dag:0,dai:[0,1,2,3,5,6],daili:[0,1,2,6],daily_bar_writ:0,dailysimulationclock:6,dale:6,data_frequ:[0,6],data_port:0,data_query_tim:6,data_query_tz:6,databas:[0,2,6],datafram:[0,1,2,3,6],dataframe_cach:[0,2],dataframecach:0,dataport:[0,6],dataset:[0,2,6],date:[0,1,2,4,5,6],date_column:0,date_format:0,date_rul:0,datetim:[0,6],datetime64:[0,6],datetimeindex:0,david:6,day_end:0,day_start:0,days_offset:0,ddof:6,debian:4,debug:[5,6],debugg:6,decay_r:0,decid:5,decil:6,decim:0,declar:[0,6],declared_d:0,decor:[0,5,6],def:[0,1,3,6],default_extens:0,default_non:0,default_ohlc_ratio:0,default_screen:0,defer:6,defin:[0,1,6],delai:1,delanei:6,delet:[0,2],deliveri:0,delta:6,demean:[0,6],denomin:6,dens:0,depdend:4,depend:[3,4,5,6],deploi:5,deprec:[0,6],deregist:0,deregister_calendar:0,deriv:[0,4],descend:0,describ:[0,1,6],descript:[0,1],design:[0,6],desir:[0,1,3],detail:[1,6],determin:[0,6],dev:[4,6],devel:4,develop:[1,3,4,5,6],deviat:[0,6],devis:1,dharmasena:6,dict:0,dict_:0,dictionari:[0,6],did:[0,1,6],diff:6,differ:[0,2,5,6],difficult:6,dip:6,dir_util:0,direct:[0,1,6],directli:[1,2,4,6],directori:[0,1,2,3,5],disabl:0,disallow:6,disc:6,discard:6,discount:0,disk:0,dispatch:6,displai:[0,5],dist:5,distanc:0,distinguish:0,distribut:[0,4,5,6],distutil:5,divid:0,dividend:[0,2,6],dividend_payout:0,dividend_valu:0,dividendsbyannouncementd:6,dividendsbyexd:6,dividendsbypayd:6,dma:[1,3,6],dname:1,dnf:4,doc:[1,2,5,6],dockerfil:6,doctest:0,document:[0,1,3,4],doe:[0,2,6],doesn:[0,2],dollar:[0,6],don:[0,1],done:[1,5,6],dot:0,down:[0,1,6],downgrad:[0,6],download:[2,3,6],downsampl:6,downsid:6,downside_risk:6,draft:5,drawback:2,drawdown:[0,6],drawn:0,drive:6,driven:3,drop:[0,6],dropna:6,dt_minut:0,dtype:[0,6],dual:0,dual_moving_averag:3,dual_moving_avg:6,dual_moving_avg_analyz:6,due:[0,6],durat:6,dure:[0,6],dynam:6,dynamically_generated_str:6,each:[0,1,2,6],earli:6,earlier:[0,1,2,6],earn:6,earningscalendar:6,eas:3,easi:[0,1,2],easier:[1,2,6],easiest:4,easili:1,eastern:6,eco:3,eddi:6,edit:5,edward:6,effect:0,effective_d:0,effici:[0,6],either:[0,1,6],element:0,element_of:6,elif:[1,3],elig:0,emiss:6,emit:6,empti:[0,2,5,6],empyr:6,enabl:6,encapsul:0,encount:0,end:[0,1,3,6],end_dat:0,end_dt:0,end_minut:0,end_sess:0,end_session_label:0,end_session_n:0,ending_cash:1,ending_exposur:1,endswith:6,enforc:0,engin:[0,3],enh:6,enough:[0,1],ensur:[0,5,6],ensure_timezon:6,enter:[0,1],entir:[0,6],entri:0,enumer:0,enviorn:2,environ:0,eodcancel:0,epoch:0,equal:[0,2,6],equiti:[0,2,6],equities_sid:0,equitiesnotfound:0,equity_daily_bar_read:0,equity_daily_read:0,equity_minute_read:0,equival:0,error:[0,6],especi:1,est:6,estim:[0,1],etc:[0,5,6],etf:6,evalu:1,even:[2,6],event:[0,1,3,6],eventrul:0,eventu:6,ever:0,everi:[0,1,6],every_dai:0,every_minut:0,everyth:2,ewma:0,ewmstd:0,ex_dat:0,exact:6,exactli:0,examin:1,exampl:0,exceed:0,excel:4,except:[0,6],exchang:[0,2,6],exchange_calendar:0,exclud:[0,6],exclus:0,execut:[0,1,3,6],execution_pric:0,execution_volum:0,executionplan:0,executionstyl:0,exercis:6,exist:[0,2,3,6],exit:[0,1,5],exit_success:5,expand:[0,6],expect:[0,2,5,6],expectedlen:0,expir:[0,6],expiration_d:0,expiringcach:[0,6],explain:4,explicit:6,explicitli:[0,1,5,6],exponenti:0,exponentialweightedmovingaverag:[0,6],exponentialweightedmovingstddev:[0,6],expos:6,exposur:[0,6],express:[0,1,6],extend:6,extens:[0,2,3,4,6],extern:6,extra:[0,6],extra_d:6,extract:6,extrem:0,face:0,facto:1,factor:[0,6],fail:[0,2,3,6],failur:2,fall:0,fals:0,far:2,fast:[0,2,6],faster:6,favor:6,fawc:6,featur:1,februari:6,fed:6,fedora:4,feedback:2,feel:1,fetch:[0,2,6],fetch_csv:0,fetcher:[0,6],few:[2,5],ffill:0,field:[0,2,5,6],fig:1,figsiz:1,figur:1,file:[0,1,2,3,4],filenam:[0,1],fill:[0,1,6],filter:[0,6],final_path:0,financ:[0,3,6],financi:[0,1],find:[0,1,2,3,5,6],finder:0,fine:5,finish:1,fire:0,firm:0,first:0,first_row:0,first_sess:0,first_trad:0,first_trading_dai:[0,6],fit:0,five:0,fix:0,fixedslippag:0,fixtur:6,flag:[1,5],flat:0,flexibl:6,float64:0,floor:6,focu:3,follow:[0,1,2,3,4,5,6],foo:6,forc:0,fore:1,forgiv:6,form:1,format:[0,1,2,5],formerli:6,fortran:4,forward:[0,2,6],found:[0,1,6],frame:[0,1],frank:6,free:[1,3,6],freetyp:4,frequenc:[0,1,6],fresh:5,friendli:0,from:[0,1,2,3,4,5,6],from_dict:0,full:[0,1,3,6],fulli:[0,6],func:0,further:1,furthermor:6,futur:[0,1,2,6],future_chain:0,future_daily_read:0,future_minute_read:0,future_symbol:0,futurechain:0,futures_sid:0,fuzzi:0,garg:6,gave:1,gcc:4,gen:0,gen_type_stub:5,gener:[0,2,3,4,5,6],get:[0,1,2,3,4,6],get_adjust:0,get_adjusted_valu:0,get_calendar:0,get_environ:[0,6],get_fetcher_asset:0,get_history_window:0,get_last_traded_dt:0,get_limit_pric:0,get_market_valu:6,get_open_ord:0,get_ord:0,get_split:0,get_spot_valu:0,get_stock_dividend:0,get_stop_pric:0,get_valu:0,gfortran:4,git:[5,6],github:[1,3,5],give:6,given:[0,1,2,6],gnu:3,good:5,goog:2,googl:6,got:1,grab:6,grain:5,granizo:6,greater:0,gross:6,group:[0,6],group_by_typ:0,groupbi:[0,6],grow:[2,6],guarante:[0,6],guard:[0,6],guid:4,guidelin:3,gzip:5,had:6,half:[0,6],half_dai:0,handl:[0,6],handle_d:6,handle_data:[0,1,3,6],handle_extra_sourc:0,happen:[0,2],happi:5,has_substr:6,have:[0,1,2,3,4,5,6],haven:1,hdf5:6,head:1,header:[3,4,5],heapq:6,heavi:1,hebert:6,held:[0,6],help:[0,1,2,6],helper:[0,6],here:[0,1,2],hidden:5,high:[0,1,6],higher_short_vwap:0,highest:[0,5],highest_high:0,hint:[5,6],histor:[0,1,3],histori:0,historycontain:6,hitchhik:4,hold:[0,6],holidai:0,holidaycalendar:0,homebrew:[3,4],hook:6,hope:1,hopefulli:6,host:3,hour:6,how:[0,1,2,4,6],howev:[0,3,5,6],html:[0,5],http:[0,1,3,5,6],hypothesi:0,ibm:0,ichimoku:6,idea:[1,2],ideal:0,identifi:0,iff:0,ignor:0,imag:[0,6],imestamp:0,immedi:6,immut:0,implement:[0,1,2,3,6],impli:0,implicitli:0,improv:[0,6],includ:[0,1,2,3,5,6],include_start_d:0,inclus:0,incomplet:2,incorrect:6,incorrectli:6,increas:[0,2,6],increment:5,incur:6,index:[0,1,5,6],indic:[0,2,6],individu:[0,1],ineffici:6,inf:0,infer:[0,2],influenc:1,info:[0,1],inform:[0,1,2,3,5,6],ing:[0,6],ingest:0,inherit:6,init_db:0,initi:[0,1,3,6],inlin:1,input:[0,1,3,6],insid:[1,6],insight:1,inspect:[1,3],instal:1,instanc:[0,2,6],instanti:[0,6],instead:[0,1,2,6],instruct:[1,4],int64:[0,6],int64index:0,integ:[0,2,6],integr:[0,3,6],intend:[1,5,6],interact:[0,1],intercept:0,interest:6,interfac:0,intermedi:0,intern:[0,2,6],interpret:[0,1],intra:6,introduc:6,invalid:[0,6],invalid_data_behavior:0,invert:0,invest:6,invoc:6,invok:2,involv:[1,2,3,4],is_alive_for_sess:0,is_bui:0,is_exchange_open:0,is_open_on_minut:0,is_sess:0,is_stal:6,isfinit:[0,6],isn:[0,6],isnan:[0,6],isnul:0,issu:[1,5,6],iter:[0,1,2,6],itercontext:0,itself:[1,6],jami:6,jan:0,jeremiah:6,join:3,jonathan:6,jpeg:0,json:6,juggl:6,juli:6,june:0,jung:6,just:[0,1,2,5,6],kamen:6,keep:[1,2],kei:[0,2,6],keyerror:[0,6],keynam:0,keyword:6,kind:0,kirkpatrick:6,know:[0,1],known:0,kwarg:[0,5,6],label:[0,5,6],labelarrai:6,lack:6,lambda:6,lambiri:6,lapack:[3,4],larg:[0,2,6],last:[0,1,2,6],last_date_in_output_for_sid:0,last_pric:6,last_row:0,last_sess:0,last_trad:0,later:[1,2,3,6],latest:[0,5,6],lazi:2,lead:[0,6],leak:2,learn:[1,3],least:0,legend:1,len:6,length:[0,6],less:[0,2],let:[1,6],level:[0,1,2,6],lever:6,leverag:[0,6],lib:[4,6],libatla:4,libfreetype6:4,libgfortran:4,librari:[3,4,6],lifetim:[0,2],like:[0,1,2,3,4,5,6],limit:[0,6],limit_pric:0,limitord:0,linear:[3,4,6],link:6,linter:5,linux:3,liquid:6,list:[0,1,2,5,6],littl:1,live:[0,1,3,6],load:[0,2,3,6],load_ext:1,load_from_yahoo:6,load_raw_arrai:0,loader:[0,2,6],loc:[0,1,6],local:[2,5,6],locat:[0,1,2,6],lock:0,logbook:6,logger:6,logic:[1,3],long_mavg:[1,3],long_vwap:0,longer:[0,1,5,6],longest:6,look:[0,1,2,5,6],lookback:0,lookup:[0,1,6],lookup_asset_typ:0,lookup_future_chain:0,lookup_future_symbol:0,lookup_gener:0,lookup_symbol:[0,6],loop:[2,6],lot:[2,6],low:[0,1],lower:[0,6],lowest:0,lowest_low:0,lowin:6,machin:[2,3,5],machineri:0,mackenzi:6,made:[0,2,6],magic:[1,6],magnitud:6,mai:[0,1,2,3,5,6],mail:1,main:[5,6],mainli:6,maintain:[0,5],major:[5,6],make:[0,1,2,5,6],manag:[0,1,3,4,5,6],mani:[0,1,2,3,4,5,6],manifest:5,manual:5,map:[0,2,6],map_identifier_index_to_sid:0,mar:6,march:6,mark:6,markdown:6,markers:1,market:[0,1,6],market_clos:[0,6],market_open:0,marketord:0,mask:[0,6],master:5,match:[0,1,5,6],mathemat:0,matplotlib:[1,3],matrix:5,mavg:[1,6],max:[0,6],max_count:[0,6],max_leverag:0,max_not:[0,6],max_percentil:0,max_shar:[0,6],maxdrawdown:0,maximum:0,maybe_show_progress:[0,2],mean:[0,1,2,3,4,5,6],meant:6,median:0,median_close10:0,median_low15:0,medianvalu:0,member:6,memori:[0,2],mention:[1,5,6],merg:6,merger:[0,2],messag:[1,6],method:[0,2,5,6],metric:[0,1,6],michael:6,micro:5,midnight:[0,6],might:[1,6],min:0,min_percentil:0,min_trade_cost:0,minimum:[0,6],minor:[5,6],minut:[0,1,2,6],minute_bar:0,minute_bar_writ:0,minute_end:0,minute_index:0,minute_index_to_session_label:0,minute_per_dai:0,minute_to_session_label:0,minutes_for_sess:0,minutes_for_sessions_in_rang:0,minutes_in_rang:0,minutes_per_dai:0,minutesimulationclock:6,mirror:1,misalign:6,mislabel:6,miss:[0,6],missing_valu:6,mock:6,mode:[0,6],modif:0,modul:[0,6],mois:6,moment:[0,5],momentum:1,momentum_pipelin:6,mon:0,mondai:0,monei:0,month:5,month_end:0,month_start:0,more:[0,1,2,3,4,6],morn:[0,6],most:[0,1,2,6],mostli:6,motiv:6,move:0,movement:[0,1],msft:[0,2,6],msgpack:0,much:[0,1,2,6],multipl:[0,2,5,6],multiple_output:0,multipleoutput:0,multiplesymbolsfound:0,multiplex:6,multipli:0,multiprocess:0,multithread:0,multupl:0,must:[0,2,5,6],mutabl:0,mutat:0,mutual:0,my_bundl:0,my_new_bundle_ingest:6,name2:6,name3:6,name4:6,name:[0,1,2,5,6],namedtemporaryfil:0,nameerror:6,namespac:[1,5,6],nan:[0,6],nanfilt:0,nanmax:0,nanmedian:0,nanmin:0,nano:5,nanosecond:0,nat:0,nativ:4,natur:0,ndarrai:[0,1],ndim:0,necessari:[0,4],need:[0,1,2,3,4,5,6],neg:[0,1,6],net:6,never:[0,2,3,6],nevercancel:0,newer:[2,6],newli:0,next:[0,1,2],next_clos:0,next_minut:0,next_open:0,next_session_label:0,nice:3,nodataond:0,nois:[0,6],non:[0,3,4,6],none:[0,6],nonexist:6,noop:6,noqa:0,normal:[0,6],nose:6,nose_parameter:6,nosuchpipelin:0,notabl:6,note:[0,1,3],notic:[0,6],notice_d:0,notion:0,notnan:[0,6],notnul:0,notnullfilt:6,notspecifi:0,novel:6,novemb:[5,6],now:[0,1,2,4,5,6],number:[0,1,2,3,4,5,6],numer:[0,3,4,6],numpi:[0,1,3,4,5,6],nyse:0,observ:0,occur:[0,6],odditi:6,off:6,offset:0,ohlc:1,ohlc_ratio:0,ohlc_ratios_per_sid:0,ohlcv:0,old:0,older:[0,2,6],onc:[0,1,2,3,4,5,6],onli:[0,1,2,4,5,6],open:[0,1,3,6],open_and_close_for_sess:0,open_ord:0,openssl:4,oper:[0,4,6],opt:0,optim:[0,6],option:[0,1,2,4,6],order_id:[0,1],order_param:0,order_perc:[0,6],order_target:[0,1,3],order_target_perc:[0,6],order_target_valu:0,order_valu:0,ordin:0,ordinari:0,org:[0,5,6],organ:6,orient:0,origin:[5,6],oscil:6,osx:[1,3],other:[0,1,2,3,4,5,6],otherwis:6,our:[0,1,3,4,5],out:[0,1,2,3,4,5,6],output:[0,1,2,3,6],output_nam:0,outsid:[0,6],over:0,overhead:6,overrid:5,overridden:6,override_:6,overridecommissionpostinit:6,overrideslippagepostinit:6,overwrit:0,overwritten:0,own:[0,2],owner:0,ownership:0,p_valu:0,packag:[3,4],packet:0,pacman:[3,4],pad:0,page:5,pai:[0,6],paid:0,pair:0,panda:[0,1,2,3,6],pandas_dataread:6,pandasrequestscsv:0,panel:0,pankaj:6,paper:6,param:[0,1,3,6],parameter:6,parent:6,pares:0,pariti:6,pars:[0,2],part:[0,1,2,3,4],partial:6,particular:[0,4],partit:[0,6],pass:[0,1,2,5,6],password:5,past:[0,1,6],patch:6,path:[0,2,6],patsi:6,pay_dat:0,payment:0,payment_sid:0,payout:0,pearson:0,pend:5,peopl:[0,6],pep8:6,per:[0,2,6],percent:[0,6],percent_of:6,percent_of_fn:6,percentag:[0,6],percentil:0,percentile_between:0,percentilefilt:0,perdollar:0,perf:[0,1,6],perf_dma:1,perf_tran:1,perform:[0,1,3],performanceperiod:6,period:[0,6],pershar:[0,6],persist:1,perspective_dt:0,pertrad:[0,6],physic:0,pickl:[0,1,3,6],piec:2,pipeline_output:0,pipelineengin:0,pkg:4,place:[0,1,6],platform:[0,3,4,6],pleas:3,plot:[1,6],plt:1,png:0,point:[0,5],popul:[0,1,5,6],popular:3,porfolio:0,porit:6,port:6,portal:6,portfolio:[0,1,6],portfolio_valu:[1,6],posit:[0,1,6],possibl:[0,1,2,6],post:5,post_func:0,postiv:6,postprocess:0,potenti:6,power:[1,3],pre:[0,2,6],pre_func:0,preced:0,precis:6,predict:[0,1],prefer:[0,6],preform:6,preload:[2,6],preper:6,preprocess:[0,5],preprocessor:6,present:[0,6],prevent:[2,5,6],previou:0,previous:[0,1,6],previous_clos:0,previous_minut:0,previous_open:0,previous_session_label:0,price:0,price_impact:0,primari:[0,4],primarili:[0,6],print:[1,5,6],prior:[0,1,6],probabl:1,problem:[1,2,5],process:[0,1,2,3],process_ord:0,produc:[0,2,6],product:[0,3],progress:[0,2],project:6,proper:6,properli:6,properti:[0,6],protect:[0,6],protocol:0,provid:[0,1,2,3,4,6],publish:[5,6],pull:[0,5,6],pun:1,purpos:0,push:5,put:6,putmask:0,pycharm:[5,6],pydata:[3,6],pyflak:6,pyfolio:6,pyi:6,pylab:[1,6],pypars:6,pypirc:5,pypitest:5,pyplot:1,python2:4,python:[0,1,3,4],pytz:6,quandl:[0,1],quandl_api_kei:2,quandl_download_attempt:2,quandl_ingest_funct:0,quantil:6,quantit:1,quantopian:[0,1],quantopianusfuturescalendar:6,quartil:6,queri:[0,2,6],queryabl:0,question:[0,1],quick:1,quickli:0,quirk:4,quit:2,quot:0,quotat:0,r_valu:0,rais:[0,6],ran:2,random:6,rang:[0,1,2,3],rank:[0,6],rankdata:0,rate:6,rather:[0,1,4,6],ratio:[0,6],raw:[0,2],reach:[0,6],read:[0,1,2,6],read_all_threshold:0,read_csv:0,read_pickl:1,readi:[0,5],readili:3,real:0,realist:1,reason:[0,2,3,4],rebal:6,rebalanc:1,recarrayfield:6,receiv:[0,2,6],recent:[0,2,4],recommend:[0,2,4,6],record:[0,1,3,6],record_d:0,redhat:4,redownload:[2,6],reduc:0,referenc:[0,6],regist:[0,1,2,6],register_calendar:0,register_calendar_typ:0,regress:[0,3,6],regression_length:0,regular:0,regular_holidai:0,reinvest:0,rel:0,relat:6,relationship:2,releas:3,relev:[0,1],reload_symbol_map:0,remain:6,remot:[0,2,6],remov:[0,5,6],renam:[5,6],render:[0,6],rep:4,repeat:[0,6],replac:6,report:[1,6],repositori:5,repr:6,repres:[0,2,6],represent:0,reproduc:2,request:[0,2,3,6],requests_csv:0,requir:[0,1,3,4,5,6],research:1,reset:6,resolut:1,resolv:[0,6],resourc:[2,6],respect:[0,5,6],respons:[0,2,6],rest:2,restrict:0,restricted_list:0,result:[0,1,2,3,6],retir:6,retri:2,retriev:[0,6],retrieve_al:0,retrieve_asset:0,retrieve_equ:0,retrieve_futures_contract:0,returns_length:0,rewritten:6,rhel:4,richard:6,risk:[1,6],riskmetricscumul:6,roll:[0,1],rollinglinearregressionofreturn:[0,6],rollingpanel:6,rollingpearsonofreturn:[0,6],rollingspearmanofreturn:[0,6],rollup:2,root:[0,5,6],root_symbol:0,root_symbol_id:0,rootdir:0,rootsymbolnotfound:0,round:6,rout:0,routin:[3,4],row:[0,1],rsi:0,rst:5,rule:[0,6],run_algo:6,run_algorithm:[0,1,6],run_pipelin:0,runawai:6,runner:0,runtim:[0,6],safeguard:6,sai:0,said:6,sale:6,same:[0,1,2,3,5,6],sampl:6,sanderson:6,sanit:0,save:[1,2,3],scalar:0,scale:6,schatzow:6,schedule_funct:[0,6],scientif:3,scikit:1,scipi:[0,3,4,6],scott:6,screen:0,screen_nam:0,script:[1,5,6],search:6,second:[0,1,4,6],section:[1,4,5,6],sector:0,secur:[1,6],security_end_d:0,security_nam:0,security_start_d:0,see:[0,1,2,3,4,6],seen:6,self:[0,6],sell:[0,1],semant:0,sentinel:[0,6],separ:4,sequenc:0,seri:[0,6],serial:[0,6],seriou:1,serv:0,server:[2,5],servic:[0,2,6],session:[0,6],session_dist:0,session_label:0,sessions_in_rang:0,sessions_window:0,set:[0,1,2,3,4,6],set_:6,set_benchmark:0,set_cancel_polici:0,set_commiss:[0,6],set_do_not_order_list:[0,6],set_long_onli:[0,6],set_max_leverag:[0,6],set_max_order_count:[0,6],set_max_order_s:[0,6],set_max_position_s:[0,6],set_screen:0,set_sid_attr:0,set_slippag:[0,6],set_symbol_lookup_d:0,set_ylabel:1,setcommissionpostinit:6,setslippagepostinit:6,settl:6,settled_cash:6,setup:[5,6],setuptool:6,sever:[3,4,6],shape:[0,6],share:[0,1,3,6],sharebuybackauthor:6,shareclass:0,sharex:1,sharp:[1,6],sharpli:6,shift:0,ship:[2,3,4,5],short_exposur:1,short_mavg:[1,3],short_valu:1,short_vwap:0,shorter:1,shorthand:0,shorts_count:1,should:[0,1,2,4,5,6],should_cancel:0,shouldn:[0,6],shourc:2,show:[0,1,2,6],show_graph:[0,6],show_progress:0,shown:[0,2],shutil:0,sid:[0,1,2,6],sid_cache_s:0,sid_day_index:0,siddata:6,side:0,sidpath:0,sidsnotfound:0,signal:[2,6],signatur:[0,2],signifi:[0,6],silent:6,sim_engin:0,sim_param:[0,6],similar:[3,6],similarli:0,simpl:[0,1,3,6],simplemovingaverag:0,simplepipelineengin:0,simpli:[0,1,3,4,6],simulation_dt_func:0,sinc:[0,1,5,6],singl:[0,2,4,6],situat:6,six:[0,6],size:[0,6],skeleton:5,skip:[0,1,3,4,6],sklearn:3,slice:[0,6],slightli:[3,4],slippagemodel:0,slope:0,small:[0,6],smaller:6,smooth:0,solv:2,some:[0,1,2,6],some_funct:0,somefactor:0,someotherfactor:0,sort:0,sortino:[1,6],sourc:[0,1,2,5,6],source_df:0,space:[1,6],span:[0,6],spars:6,spearman:0,special:0,special_clos:0,special_closes_adhoc:0,special_open:0,special_opens_adhoc:0,specif:[0,3,6],specifi:[0,1,2,3,5,6],speed:6,speedup:6,spend:1,sphinx:[5,6],split:[0,2,6],spot:0,spot_valu:0,spread:0,spuriou:6,sql:0,sqlalchemi:0,sqlite3:0,sqlite:0,sqliteadjustmentread:0,sqliteadjustmentwrit:[0,2],squar:[0,6],stai:5,standard:[0,2,6],start:[0,1,2,3,6],start_dat:0,start_dt:0,start_minut:0,start_sess:0,start_session_label:0,start_session_n:0,starting_cash:1,starting_exposur:1,starting_valu:1,startswith:6,stat:[0,6],state:[0,1,2,3,6],statist:3,statsmodel:[3,6],std:6,stddev:6,stderr:0,stdout:[1,6],step:[1,2],still:[1,2,6],stochast:6,stock:[0,1,2,6],stock_dividend:0,stop:0,stop_pric:0,stoplimitord:0,stopord:0,store:[0,1,2,6],str:0,strategi:[1,3],stream:[0,1,3,6],strength:[0,6],strict_extens:0,strictli:[0,2],string:[0,2,5],string_typ:0,strip:0,strong:[0,6],strongli:4,struct:0,structur:6,style:0,subclass:[0,6],subdirectori:[0,2],subject:[0,6],subplot:1,subtest:6,subtract:0,succe:5,success:[0,2],sudo:4,suffici:[4,6],suminda:6,superior:6,suppli:[0,1,6],support:[0,3,4,5],suppos:1,surpris:1,svg:0,swap:0,sym:3,symbol:[0,1,2,3,6],symbol_column:0,symbol_str:0,symbolnotfound:0,symptom:6,sync:[5,6],syntax:[0,5,6],system:[0,3,4,6],tabl:[0,6],table_len:0,tag:5,take:[0,1,2,6],taken:5,tape:0,tar:5,tarbal:5,target:[0,6],tbd:6,tech_filt:6,tech_stock:6,technic:[0,6],tell:[0,6],templat:5,temporari:[0,5],temporarili:0,ten:[0,1,6],ten_day_rang:0,tendayrang:0,term:[0,1,6],termgraph:0,termin:1,test:[0,1,3,5],testpypi:5,text:1,than:[0,1,2,3,4,6],thei:[0,1,2,5,6],them:[0,1,3,4,5,6],themselv:6,therefor:5,thi:[0,1,2,3,4,5,6],thing:6,think:6,thoma:6,those:[0,5,6],though:[2,6],thousand:0,thread:0,three:[0,1,2,6],threshold:0,through:[0,1,2,3,6],thse:6,thu:1,tick:6,tick_siz:0,ticker:[0,2,6],time:[0,1,2,3,5,6],time_rul:0,timer:6,timestamp:[0,1,2,6],timezon:0,tip:0,titl:5,tmp_dir:0,to_dict:[0,6],to_execution_plan:0,to_simple_graph:0,todai:[0,5,6],togeth:[0,1],toni:6,too:6,tool:[2,4,5,6],top:[0,5,6],tornado:6,total:[0,2,6],total_positions_valu:6,toward:6,track:[0,1,6],tracker:[1,6],trader:1,tradesimul:6,trading_calendar:0,trading_dai:[0,1],tradingalgorithm:[0,5,6],tradingcalendar:[0,2,6],tradingcontrolexcept:0,tradingsimul:0,trail:6,train:1,transact:[0,1],transaction:2,transform:[1,6],travers:6,travi:[5,6],treasuri:6,treasury_period_return:1,treat:[0,6],trend:1,tresaury_period_return:6,tri:[1,3],trigger:[0,6],trovo:6,truerang:6,tue:0,tuesdai:0,tune:0,tupl:[0,2,6],turn:5,twice:[5,6],two:[0,1,3,4,6],txn:[0,6],txt:5,type:[0,5,6],tzinfo:[0,6],uint32:0,unaffect:[0,6],unalign:6,unbalanc:6,unbound:0,unchang:0,uncondition:6,under:[0,1,2,5,6],underli:[0,1],underlin:5,understand:[4,6],undesir:[0,6],undocu:6,unifi:6,uniqu:[0,6],unit:[1,6],univers:[0,1,6],universe_func:0,unix:0,unknownbundl:0,unlik:[2,6],unnecessari:6,unneed:6,unregist:0,untar:2,untest:6,until:0,unverifi:6,upcom:0,updat:[0,1],upgrad:[5,6],upon:[0,6],upper:0,upstream:0,upward:1,uri:0,url:0,us_equity_pr:0,usag:[1,6],usequitypr:0,user:[0,1,2,3,5,6],usernam:5,usual:0,utc:[0,6],vagrantfil:6,val:0,valid:[0,6],valu:[0,1,3,6],value1:6,value2:6,value3:6,value4:6,valueerror:0,vari:[3,4,6],variabl:[0,1,2,6],variou:[1,2,6],varnam:1,veri:[0,1,2,5],verifi:5,versa:0,version:[0,4,5,6],via:[0,1,3,4,6],vice:0,view:[0,5],viewpoint:0,violatil:6,virtualenv:[4,5],visual:3,vix:0,volatil:6,volum:[0,1,6],volume_limit:0,volumeshareslippag:0,vwap:[0,6],vwap_10:0,vwaps_under_20:0,wai:[0,1,2,3,4,6],wait:6,want:[0,1,2,3,6],warm:6,warn:[0,5,6],warn_on_cancel:0,web:[1,5],websit:6,wed:0,week_end:0,week_start:0,weight:[0,6],weightedaveragevalu:0,well:[0,1,2,6],were:[5,6],what:[0,5],whatev:2,whatsnew:5,wheel:5,when:[0,2,5,6],where:[0,1,2,6],wherea:6,whether:0,which:[0,1,2,3,4,5,6],who:6,whose:0,width:5,wiecki:6,wiki:[0,1],wikipedia:[0,6],win:5,window:[0,1,3],window_length:[0,6],window_saf:6,wise:6,wish:1,withassetfind:6,within:[0,1,3,6],without:[0,1,2,4,6],working_dir:0,working_fil:0,worth:[0,1,6],would:[0,1,2,3,5,6],wrap:[0,5,6],write:[0,1],write_col:0,write_csv:0,write_dividend_data:0,write_dividend_payout:0,write_sid:0,written:[0,1,2,3,6],wrong:6,wrongdatafortransform:6,xlrd:6,yahoo:0,yahoo_equ:[0,2],year:[0,1,5],yet:[0,1],you:[0,1,2,3,4,5,6],your:[0,1,2,3,4,5,6],yum:3,zero:[0,6],ziplin:0,zipline_root:[0,2,5],ziplinetestcas:6,zscore:[0,6]},titles:["API Reference","Zipline beginner tutorial","Data Bundles","Zipline","Install","Zipline Release Process","Release Notes"],titleterms:{"__version__":5,"default":2,"function":0,"new":[2,6],access:1,adjustment_writ:2,algorithm:[0,1],api:0,asset:0,asset_db_writ:2,avail:2,averag:1,backtest:[0,2],basic:1,bdist:5,beginn:1,bug:6,build:6,bundl:[0,2,6],cach:[0,2],calendar:[0,2],cancel:0,chang:6,command:[0,1],commiss:0,commit:5,conclus:1,conda:[3,4,5],contribut:3,contributor:6,control:0,cross:1,daily_bar_writ:2,data:[0,1,2,6],discov:2,document:[5,6],dual:1,end_sess:2,enhanc:6,entri:6,environ:2,exampl:1,experiment:6,factori:2,featur:[3,6],file:5,first:1,fix:6,format:6,gnu:4,highlight:6,histori:1,ingest:[1,2],instal:[3,4],interfac:1,ipython:1,line:[0,1],linux:4,mainten:6,metadata:0,minute_bar_writ:2,mirror:2,miscellan:[0,6],model:0,move:1,next:5,note:[5,6],notebook:1,object:0,old:2,order:0,osx:4,output_dir:2,over:1,packag:5,paramet:0,perform:6,pip:[3,4],pipelin:[0,6],point:6,polici:0,previou:1,price:1,process:5,pypi:5,python:5,quandl:2,quantopian:2,quickstart:3,reader:0,refactor:6,refer:0,releas:[5,6],rewrit:6,run:[0,1,2],schedul:0,sdist:5,show_progress:2,simul:0,slippag:0,start_sess:2,string:6,stub:5,support:6,test:6,trade:0,tutori:1,updat:5,upload:5,util:0,wiki:2,window:4,work:1,write:2,writer:0,yahoo:2,ziplin:[1,3,5,6]}})