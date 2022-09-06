import './App.css';
import NavBar from './components/NavBar';
import Button from './components/Button';
import Text from './components/Text';
import TextBox from './components/TextBox';
import Section from './components/Section';
import NewsItem from './components/NewsItem';
import Icon  from './components/Icon';
import Box from './components/Box';
import './components/style.css'
import React,{useState , useEffect} from 'react';




function App(props) {
  let [isMobile , setisMobile] = useState(false)
  let mql = false

  window.addEventListener('resize',()=>{
    mql = window.matchMedia(`(max-width: ${props.max || '700px'})`)
    setisMobile(mql.matches)
    console.log("state => " + isMobile , mql.matches)
  })

  useEffect(()=>{
    mql = window.matchMedia(`(max-width: ${props.max || '700px'})`)
    setisMobile(mql.matches)
    console.log("effect => " + isMobile , mql.matches)
  },[])
  
  return (
    <div className="fc c">

  
      
      <NavBar logo="./images/logo.svg" items={['Home','About','Contact','Blog','Carrers']} max="700px">
      <Button text="Request Invite" classes="btn mx10 my20"/>
      </NavBar>

      {isMobile?
         <div  className='heroBack fr c heroBack-mobile'>
        <div  className=' fb1 fc ai'>
        <div  className='heroImg heroImg-mobile'></div>
          <TextBox titleText="Next generation digital banking" 
                    contentText=" Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more."
                    contentColor="gray"
                    width={isMobile? "90%" : "400px"}
                    boxClasses="ib fc ai"
                    titleTextAlign="center"
                    titleLevel="1"
                    classes="my6 mx4">
                      <Button text="Request Invite" classes="btn my20"/>
          </TextBox>
        
        </div>
      </div> 

      :<Section p1={'heroBack fr c'} p2={'py100 fb1'}>
       <TextBox titleText="Next generation digital banking" 
                    contentText=" Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more."
                    contentColor="gray"
                    width="400px"
                    classes="my6 mx4">
                      <Button text="Request Invite" classes="btn my20"/>
          </TextBox>
        <div  className='heroImg'></div>
      </Section>}

      
      
      
      <Section p1={isMobile? 'tc' : 'fr c'} p2='py50 fb1' color="lightgray">
        <TextBox titleText="Why choose Easybank?" 
                    contentText="  We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before."
                    contentColor="gray"
                    width={isMobile? "100%" : "70%"}
                    titleSize="30px"
                    titleLevel="2"
                    classes=" mx4"
                    color="lightgray">
                    
          </TextBox>
        </Section>


      
      <Section p1='fr c'
           p2={ isMobile? 'py30 fb1 fc sb tc' : 'py50 fb1 fr sb'}
           color="lightgray">
        <TextBox 
                   url={`${process.env.PUBLIC_URL}/images/icon-online.svg`}
                   titleText="Online Banking" 
                    contentText="Our modern web and mobile applications allow you to keep track of your finances 
                    wherever you are in the world."
                    contentColor="gray"
                   
                    titleSize="20px"
                    classes="my10 mx10">
                    
          </TextBox>
          <TextBox  url={`${process.env.PUBLIC_URL}/images/icon-budgeting.svg`}
                    titleText="Simple Budgeting" 
                    contentText="See exactly where your money goes each month. Receive notifications when you’re 
                    close to hitting your limits."
                    contentColor="gray"
                 
                    titleSize="20px"
                    classes="my6 mx4">
                    
          </TextBox>
          <TextBox  url={`${process.env.PUBLIC_URL}/images/icon-online.svg`}
                    titleText="Fast Onboarding" 
                    contentText="We don’t do branches. Open your account in minutes online and start taking control 
                    of your finances right away."
                    contentColor="gray"
                   
                    titleSize="20px"
                    classes="my6 mx4">
                    
          </TextBox>
          <TextBox  url={`${process.env.PUBLIC_URL}/images/icon-api.svg`}
                    titleText="Open API" 
                    contentText="Manage your savings, investments, pension, and much more from one account. Tracking 
                    your money has never been easier."
                    contentColor="gray"
                   
                    titleSize="20px"
                    classes="my6 mx4">
                    
          </TextBox>
        </Section>
      


       
      {/*Articles start here*/}

      <Section>
        <Text level="2" text="Latest Articles" size="30px" textAlign={isMobile && 'center'} classes=' myt50'/>
      </Section>

      <Section p1={'fr c my100'} p2={isMobile? 'fc fb90' : 'fr c py10 fb1'}>
         <NewsItem
           src="images/image-currency.jpg"
           author="By Claire Robinson"
           title="Receive money in any currency with no fees"
           content="The world is getting smaller and we’re becoming more mobile. So why should you be 
           forced to only receive money in a single …"
           classes={"mx10 cpad my10 cr5 card"}
           imgWidth="100%"
           imgHeight={!isMobile && "30%"}
           height="90%"
           authorSize="10px"
           titleSize="18px"
           titleLevel="3"
           aStyle="my8 px10"
           tStyle="my10 px10 newstext"
           cStyle="my8 px10"
           
           imgStyle="img"
           
           />
          
          <NewsItem
           src="images/image-restaurant.jpg"
           author="By Wilson Hutton"
           title="Treat yourself without worrying about money"
           content="Our simple budgeting feature allows you to separate out your spending and set 
           realistic limits each month. That means you …"
           imgWidth="100%"
           imgHeight={!isMobile && "30%"}
           classes="mx10 cpad my10 cr5 card"
           height="90%"
           authorSize="10px"
           titleSize="18px"
           titleLevel="3"
           aStyle="my8 px10"
           tStyle="my10 px10 newstext"
           cStyle="my8 px10"
           imgStyle="img"
           />

          <NewsItem
           src="images/image-plane.jpg"
           author="By Wilson Hutton"
           title="Take your Easybank card wherever you go"
           content="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
           while you’re abroad. We’ll even show you …"
           imgWidth="100%"
           imgHeight={!isMobile && "30%"}
           classes="mx10 cpad my10 cr5 card"
           height="90%"
           authorSize="10px"
           titleSize="18px"
           titleLevel="3"
           aStyle="my8 px10"
           tStyle="my10 px10 newstext"
           cStyle="my8 px10"
           imgStyle="img"
           />

          <NewsItem
           src="images/image-confetti.jpg"
           classes="mx10 cpad my10 cr5 card"
           author="By Claire Robinson"
           title="Our invite-only Beta accounts are now live!"
           content="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
           It’s easy to request an invite through the site ..."
           imgWidth="100%"
           imgHeight={!isMobile && "30%"}
           height="90%"
           authorSize="10px"
           titleSize="18px"
           titleLevel="3"
           aStyle="my8 px10"
           tStyle="my10 px10 newstext"
           cStyle="my8 px10"
           imgStyle="img"
           />
        </Section>
   
      

        {/*Footer*/}
         
        <Section color="hsl(233, 26%, 24%)"
                 p2={isMobile?"fc c tac" :"fr fb1 fs"}>
          <Box classes={isMobile? "my30" : "ib"}>
              <Icon width="100%" height="20px" url="images/footer-logo.svg" classes="ib my20"/>
              <Box classes={isMobile?"fr c" : null}> 
                <Icon width="20px" height="20px" url="images/icon-facebook.svg" classes={isMobile? "mx10 icon" : "ib icon my20 mxr2"}/>
                <Icon width="20px" height="20px" url="images/icon-youtube.svg" classes={isMobile? "mx10 icon" : "ib icon my20 mxr2"}/>
                <Icon width="20px" height="20px" url="images/icon-twitter.svg" classes={isMobile? "mx10 icon" : "ib icon my20 mxr2"}/>
                <Icon width="20px" height="20px" url="images/icon-pinterest.svg" classes={isMobile? "mx10 icon" : "ib icon my20 mxr2"}/>
                <Icon width="20px" height="20px" url="images/icon-instagram.svg" classes={isMobile? "mx10 icon" : "ib icon my20 mxr2"}/>
              </Box>
          </Box>
          <Box classes={isMobile? null : "mx20p my20"}>
            <Text size="14px" text="About Us" classes="ftext"/>
            <Text size="14px" text="Contact" classes="my10 ftext"/>
            <Text size="14px" text="Blog" classes={isMobile?"my10 ftext" : "ftext"}/>
          </Box>
          <Box classes={isMobile? null : "mx20p my20 jse"}>
            <Text size="14px" text="Carrers" classes="ftext"/>
            <Text size="14px" text="Support" classes="my10 ftext"/>
            <Text size="14px" text="Privacy Policy" classes="ftext"/>
          </Box>
          <Box classes={isMobile?" my30 ftext" :"my20 n ftext"}>
          <Button text="Request Invite" classes="btn"/>
          <Text classes="my10 ftext" size="10px" text=" © Easybank. All Rights Reserved"/>
          </Box>
          
          
        </Section>
        <div className='attri-cont'>
          <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">victor ifeanyi</a>.
          </div>
        </div>
        


    
     
 
    </div>
  );
}

export default App;
