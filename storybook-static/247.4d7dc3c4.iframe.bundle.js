"use strict";(self.webpackChunkaces_maverick=self.webpackChunkaces_maverick||[]).push([[247],{"./src/libs/cf/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I_:()=>CfBanner,v_:()=>CfButtonServer,t8:()=>CfHeader,zB:()=>CfImage,oQ:()=>CfImageServer,gL:()=>CfLink,kn:()=>CfLinkTextServer,mX:()=>CfLockup,r7:()=>CfRichTextRender,GE:()=>CfStyledListServer,q:()=>CfVideoEmbed});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@contentful/live-preview/dist/index.js");__webpack_require__("./node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs");var CfLinkTypes=function(CfLinkTypes){return CfLinkTypes.PageLink="Page Link",CfLinkTypes.CustomLink="Custom Link",CfLinkTypes}({}),pages_types_SpecialtyPages=function(SpecialtyPages){return SpecialtyPages.Homepage="Homepage",SpecialtyPages}({}),pages_types_RouteDirectory=function(RouteDirectory){return RouteDirectory.Homepage="/",RouteDirectory.Articles="/articles",RouteDirectory.Search="/search",RouteDirectory}({});const generateId=title=>title.replace(/\s+/g,"");var ui=__webpack_require__("./src/libs/ui/index.ts");const buttonStyles={Primary:{color:"primary",variant:"contained"},"Primary Gradient":{color:"gradient",variant:"contained"},"Primary Outline":{color:"primary",variant:"outlined"},Secondary:{color:"secondary",variant:"contained"},"Secondary Outline":{color:"secondary",variant:"outlined"},Knockout:{color:"inherit",variant:"text"}},CfButton=({internalTitle,title,link,buttonStyle,rightIcon,fullWidthMobile,__typename,id,lang})=>{const style=buttonStyles[buttonStyle];return ui.$n&&style?(0,jsx_runtime.jsx)(CfLink,{linkType:link.linkType,pageLink:link.pageLink,customLink:link.customLink,target:link.target,lang,children:(0,jsx_runtime.jsx)(ui.$n,{id:generateId(internalTitle),"data-component":__typename,color:style.color,variant:style.variant,fullWidthMobile,endIcon:rightIcon&&(0,jsx_runtime.jsx)(ui.In,{icon:rightIcon}),...dist.pI.getProps({entryId:id,fieldId:"title",locale:lang}),children:title})}):null};CfButton.__docgenInfo={description:"",methods:[],displayName:"CfButton",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},title:{required:!0,tsType:{name:"string"},description:""},link:{required:!0,tsType:{name:"CfLinkProps"},description:""},buttonStyle:{required:!0,tsType:{name:"ButtonStyleType"},description:""},rightIcon:{required:!1,tsType:{name:"literal",value:'"RightLongArrow"'},description:""},fullWidthMobile:{required:!1,tsType:{name:"boolean"},description:""}}};var lib=__webpack_require__("./node_modules/graphql-tag/lib/index.js"),HttpLink=__webpack_require__("./node_modules/@apollo/client/link/http/HttpLink.js"),ApolloClient=__webpack_require__("./node_modules/@apollo/client/core/ApolloClient.js"),inMemoryCache=__webpack_require__("./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");const uri="https://graphql.contentful.com/content/v1/spaces/mokiozcm6xm5/environments/dev",createClient=(preview=!1)=>{const accessToken=preview?"oRl7GJ46-xVvtVBEosnM7OK_tZOEvYx51ncaZZrEJwM":"dWr_Jtu3K1NIYQBGHKQxONVU-lOp-j-QdeCszSdymCc",httpLink=new HttpLink.P({uri,headers:{"Cache-Control":"no-cache","content-type":"application/json",authorization:`Bearer ${accessToken}`}});return new ApolloClient.R({link:httpLink,cache:new inMemoryCache.D,uri,headers:{"Cache-Control":"no-cache","content-type":"application/json",authorization:`Bearer ${accessToken}`},defaultOptions:{watchQuery:{fetchPolicy:"no-cache",errorPolicy:"ignore"},query:{fetchPolicy:"no-cache",errorPolicy:"all"},mutate:{fetchPolicy:"no-cache",errorPolicy:"all"}}})},client_cfClient=createClient(),client_cfPreviewClient=createClient(!0);let t;(0,lib.J1)(t||(t=(t=>t)`
  query ($id: String!, $preview: Boolean!) {
    appsCollection(where: { appId: $id }, limit: 1, preview: $preview) {
      items {
        appName
        appId
        copyrightText
      }
    }
  }
`));let component_queries_t,t1,t2,t3,t4,component_queries_=t=>t;const PageLinkFragment=(0,lib.J1)(component_queries_t||(component_queries_t=component_queries_`
  fragment PageLink on Page {
    slug
  }
`)),LinkFragment=(0,lib.J1)(t1||(t1=component_queries_`
  ${0}

  fragment Link on Link {
    internalTitle
    linkType
    pageLink {
      ...PageLink
    }
    customLink
    target
  }
`),PageLinkFragment),ButtonFragment=(0,lib.J1)(t2||(t2=component_queries_`
  ${0}

  fragment Button on Button {
    internalTitle
    title
    link {
      ...Link
    }
    buttonStyle
    sys {
      id
    }
    __typename
  }
`),LinkFragment),ImageFragment=(0,lib.J1)(t3||(t3=component_queries_`
  fragment Image on Image {
    internalTitle
    image {
      url
      width
      height
    }
    altText
    sys {
      id
    }
    __typename
  }
`));(0,lib.J1)(t4||(t4=component_queries_`
  fragment Modal on Modal {
    sys {
      id
    }
    internalTitle
    modalHeadline
    modalSubhead
    modalBodyCollection {
      items {
        ... on Accordions {
          internalTitle
          accordionsCollection {
            items {
              internalTitle
              headline
              bodyCopy {
                json
              }
            }
          }
          sys {
            id
          }
        }
      }
    }
    __typename
  }
`));let page_queries_t,page_queries_t1,page_queries_t2,page_queries_=t=>t;(0,lib.J1)(page_queries_t||(page_queries_t=page_queries_`
  query ($id: String!, $preview: Boolean!) {
    page(id: $id, preview: $preview) {
      pageBodyCollection {
        items {
          ... on Banner {
            sys {
              id
            }
          }
          ... on CardSlider {
            sys {
              id
            }
          }
          ... on Header {
            sys {
              id
            }
          }
          ... on Image {
            sys {
              id
            }
          }
          ... on Lockup {
            sys {
              id
            }
          }
          ... on RichTextSection {
            sys {
              id
            }
          }
          ... on VideoEmbed {
            sys {
              id
            }
          }
          __typename
        }
      }
    }
  }
`)),(0,lib.J1)(page_queries_t1||(page_queries_t1=page_queries_`
  query ($slug: String!, $preview: Boolean!) {
    pageCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
      items {
        title
        slug
        specialtyPage
        seo
        sys {
          id
        }
      }
    }
  }
`)),(0,lib.J1)(page_queries_t2||(page_queries_t2=page_queries_`
  query ($specialtyPage: String!, $preview: Boolean!) {
    pageCollection(
      where: { specialtyPage: $specialtyPage }
      limit: 1
      preview: $preview
    ) {
      items {
        title
        slug
        seo
        pageHero {
          __typename
          sys {
            id
          }
        }
        sys {
          id
        }
      }
    }
  }
`));let tags_queries_t,tags_queries_t1,tags_queries_t2,tags_queries_=t=>t;(0,lib.J1)(tags_queries_t||(tags_queries_t=tags_queries_`
  ${0}

  fragment TeamMember on TeamMember {
    name
    role
    description
    profileImage {
      ...Image
    }
  }
`),ImageFragment);const CategoriesFragment=(0,lib.J1)(tags_queries_t1||(tags_queries_t1=tags_queries_`
  fragment Categories on Categories {
    title
    slug
  }
`));(0,lib.J1)(tags_queries_t2||(tags_queries_t2=tags_queries_`
  ${0}

  query ($preview: Boolean!, $locale: String!) {
    categoriesCollection(preview: $preview, locale: $locale) {
      items {
        ...Categories
      }
    }
  }
`),CategoriesFragment);__webpack_require__("./node_modules/console-browserify/index.js");var i18n=__webpack_require__("./src/libs/i18n/index.ts");__webpack_require__("./node_modules/console-browserify/index.js");var services_console=__webpack_require__("./node_modules/console-browserify/index.js");let services_t;const ButtonQuery=(0,lib.J1)(services_t||(services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    button(id: $id, preview: $preview, locale: $locale) {
      ...Button
    }
  }
`),ButtonFragment),ButtonSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{variant:"rounded",width:140,height:40});ButtonSkeleton.__docgenInfo={description:"",methods:[],displayName:"ButtonSkeleton"};var cf_button_console=__webpack_require__("./node_modules/console-browserify/index.js");const CfButtonServer=async({id,preview,lang})=>{let data;try{data=await(async(id,preview=!1,locale=i18n.q)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:ButtonQuery,variables:{id,preview,locale}})).data.button}catch(error){throw services_console.error("Error fetching data:",error),error}})(id,preview,lang)}catch(error){return cf_button_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(ButtonSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfButton,{internalTitle:data.internalTitle,title:data.title,link:data.link,buttonStyle:data.buttonStyle,rightIcon:data.rightIcon,fullWidthMobile:data.fullWidthMobile,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(ButtonSkeleton,{})};CfButtonServer.__docgenInfo={description:"",methods:[],displayName:"CfButtonServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}};var theme=__webpack_require__("./src/libs/theme/index.ts");const CfBanner=({internalTitle,headline,subhead,button,backgroundColor,__typename,id,lang,preview})=>{var _button_sys;const color=((color,tolerance=125)=>{const rgb=parseInt(color.replace("#",""),16);return(299*(rgb>>16&255)+587*(rgb>>8&255)+114*(255&rgb))/1e3<=tolerance})(backgroundColor.value)?"primary.contrastText":"text.primary";return(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,marginY:{xs:theme.dW.xs,md:theme.dW.md},children:(0,jsx_runtime.jsx)(ui.mc,{children:(0,jsx_runtime.jsxs)(ui.az,{style:{display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:{xs:"flex-start",md:"center"},justifyContent:"space-between",gap:"1.5rem",background:"Orange"===backgroundColor.name?theme.MF.gradient.secondary:theme.MF.gradient.primary,padding:{xs:"1.5rem",md:"3rem"}},children:[(headline||subhead)&&(0,jsx_runtime.jsxs)(ui.az,{style:{maxWidth:"524px"},children:[headline&&(0,jsx_runtime.jsx)(ui.H2,{color,marginBottom:2,...dist.pI.getProps({entryId:id,fieldId:"headline",locale:lang}),children:headline}),subhead&&(0,jsx_runtime.jsx)(ui.EY,{color,...dist.pI.getProps({entryId:id,fieldId:"subhead",locale:lang}),children:subhead})]}),button&&(0,jsx_runtime.jsx)(ui.az,{style:{width:{xs:"100%",sm:"auto"}},children:(0,jsx_runtime.jsx)(CfButton,{internalTitle:button.internalTitle,title:button.title,link:button.link,buttonStyle:button.buttonStyle,__typename:button.__typename,id:(null==button||null===(_button_sys=button.sys)||void 0===_button_sys?void 0:_button_sys.id)||"",preview,lang})})]})})})};CfBanner.__docgenInfo={description:"",methods:[],displayName:"CfBanner",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},headline:{required:!1,tsType:{name:"string"},description:""},subhead:{required:!1,tsType:{name:"string"},description:""},button:{required:!1,tsType:{name:"CfButtonProps"},description:""},backgroundColor:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n  name: string;\n  value: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}},description:""}}};var cf_banner_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_banner_services_t;const BannerQuery=(0,lib.J1)(cf_banner_services_t||(cf_banner_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    banner(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      subhead
      button {
        ...Button
      }
      backgroundColor
      sys {
        id
      }
    }
  }
`),ButtonFragment),BannerSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height:275});BannerSkeleton.__docgenInfo={description:"",methods:[],displayName:"BannerSkeleton"};var cf_banner_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,preview,lang})=>{let data;try{data=await(async(id,preview=!1,locale=i18n.q)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:BannerQuery,variables:{id,preview,locale}})).data.banner}catch(error){throw cf_banner_services_console.error("Error fetching data:",error),error}})(id,preview)}catch(error){return cf_banner_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(BannerSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfBanner,{internalTitle:data.internalTitle,headline:data.headline,subhead:data.subhead,button:data.button,backgroundColor:data.backgroundColor,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(BannerSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"CfBannerServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}};var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),rich_text_react_renderer_es5=__webpack_require__("./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js"),rich_text_types_dist=__webpack_require__("./node_modules/@contentful/rich-text-types/dist/index.js"),cf_rich_text_render_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_rich_text_render_services_t;const RichTextRenderQuery=(0,lib.J1)(cf_rich_text_render_services_t||(cf_rich_text_render_services_t=(t=>t)`
  query ($id: String!, $preview: Boolean!, $locale: String!) {
    entryCollection(
      where: { sys: { id: $id } }
      limit: 1
      preview: $preview
      locale: $locale
    ) {
      items {
        sys {
          id
        }
        __typename
      }
    }
  }
`)),fetchRichTextEmbedEntry=async(id,preview=!1,locale="en-US")=>{try{const response=await client_cfClient.query({query:RichTextRenderQuery,variables:{id,preview,locale}});return response.data.entryCollection.items.length?response.data.entryCollection.items[0]:null}catch(error){return cf_rich_text_render_services_console.error(`Error fetching entry with ID ${id}:`,error),null}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/libs/cf/lib/cf-rich-text-render/style.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style_module.A,options);const cf_rich_text_render_style_module=style_module.A&&style_module.A.locals?style_module.A.locals:void 0,mapAlignment=alignment=>{const lowerCaseAlignment=alignment.toLowerCase();switch(lowerCaseAlignment){case"center":case"inherit":case"justify":case"left":case"right":return lowerCaseAlignment;default:return}},CfRichTextRender=({richTextDocument,alignment="Left",baseFontSize="1rem",lang,preview,...rest})=>{const processChildrenWithLineBreaks=children=>react.Children.map(children,(child=>{return"string"==typeof child?child.split("\n").map(((line,index,array)=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[line,index<array.length-1&&(0,jsx_runtime.jsx)("br",{})]},index))):react.isValidElement(child)?react.cloneElement(child,{children:processChildrenWithLineBreaks(null===(_child_props=child.props)||void 0===_child_props?void 0:_child_props.children)}):child;var _child_props})),CfText=({children})=>(0,jsx_runtime.jsx)(ui.EY,{align:mapAlignment(alignment),style:{fontSize:"inherit",lineHeight:"inherit",paddingBottom:"1rem","&:last-child":{paddingBottom:0}},children:processChildrenWithLineBreaks(children)}),options={renderNode:{[rich_text_types_dist.BLOCKS.PARAGRAPH]:(node,children)=>(0,jsx_runtime.jsx)(CfText,{children}),[rich_text_types_dist.BLOCKS.HEADING_1]:(node,children)=>(0,jsx_runtime.jsx)(ui.H1,{align:mapAlignment(alignment),style:{marginBottom:"1rem"},children}),[rich_text_types_dist.BLOCKS.HEADING_2]:(node,children)=>(0,jsx_runtime.jsx)(ui.H2,{align:mapAlignment(alignment),style:{marginBottom:"1rem"},children}),[rich_text_types_dist.BLOCKS.HEADING_3]:(node,children)=>(0,jsx_runtime.jsx)(ui.H3,{align:mapAlignment(alignment),style:{marginBottom:"1rem"},children}),[rich_text_types_dist.BLOCKS.HEADING_4]:(node,children)=>(0,jsx_runtime.jsx)(ui.H4,{align:mapAlignment(alignment),style:{marginBottom:".75rem"},children}),[rich_text_types_dist.BLOCKS.HEADING_5]:(node,children)=>(0,jsx_runtime.jsx)(ui.H5,{align:mapAlignment(alignment),style:{marginBottom:".5rem"},children}),[rich_text_types_dist.BLOCKS.HEADING_6]:(node,children)=>(0,jsx_runtime.jsx)(ui.H6,{align:mapAlignment(alignment),style:{marginBottom:".5rem"},children}),[rich_text_types_dist.BLOCKS.EMBEDDED_ENTRY]:async node=>{const id=node.data.target.sys.id;switch((await fetchRichTextEmbedEntry(id)).__typename){case"Image":return(0,jsx_runtime.jsx)(CfImageServer,{id,preview,lang,nested:!0});case"StyledList":return(0,jsx_runtime.jsx)(CfStyledListServer,{id,preview,lang});default:return null}},[rich_text_types_dist.INLINES.EMBEDDED_ENTRY]:async node=>{const id=node.data.target.sys.id;switch((await fetchRichTextEmbedEntry(id)).__typename){case"Button":return(0,jsx_runtime.jsx)(CfButtonServer,{id,preview,lang});case"LinkText":return(0,jsx_runtime.jsx)(CfLinkTextServer,{id,preview,lang});default:return null}}}};return(0,jsx_runtime.jsx)(ui.az,{className:cf_rich_text_render_style_module.richText,style:{fontSize:baseFontSize,lineHeight:1.75},...rest,children:(0,rich_text_react_renderer_es5.i)(richTextDocument,options)})};CfRichTextRender.__docgenInfo={description:"",methods:[],displayName:"CfRichTextRender",props:{richTextDocument:{required:!0,tsType:{name:"Document"},description:""},alignment:{required:!1,tsType:{name:"union",raw:'"Left" | "Center" | "Right"',elements:[{name:"literal",value:'"Left"'},{name:"literal",value:'"Center"'},{name:"literal",value:'"Right"'}]},description:"",defaultValue:{value:'"Left"',computed:!1}},baseFontSize:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"1rem"',computed:!1}}},composes:["Pick"]};const CfCard=({internalTitle,headline,bodyCopy,image,imageSize,cardType,__typename,id,lang,preview})=>{const isDefault="Default"===cardType;return(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,children:(0,jsx_runtime.jsxs)(ui.Zp,{raised:isDefault,children:[image&&(0,jsx_runtime.jsx)(ui.Zp.Media,{component:"img",image:image.image.url,alt:image.altText,imageSize,...dist.pI.getProps({entryId:id,fieldId:"image",locale:lang})}),(0,jsx_runtime.jsxs)(ui.Zp.Content,{style:{padding:isDefault?"1rem":0,paddingTop:image?"1rem":0},children:[headline&&(0,jsx_runtime.jsx)(ui.H4,{component:"h3",marginBottom:2,...dist.pI.getProps({entryId:id,fieldId:"headline",locale:lang}),children:headline}),bodyCopy&&(0,jsx_runtime.jsx)(CfRichTextRender,{richTextDocument:bodyCopy.json,alignment:"Left",lang,preview,...dist.pI.getProps({entryId:id,fieldId:"bodyCopy",locale:lang})})]})]})})};CfCard.__docgenInfo={description:"",methods:[],displayName:"CfCard",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},cardType:{required:!0,tsType:{name:"CardTypes"},description:""},headline:{required:!1,tsType:{name:"string"},description:""},bodyCopy:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  json: Document;\n}",signature:{properties:[{key:"json",value:{name:"Document",required:!0}}]}},description:""},image:{required:!1,tsType:{name:"CfImageType"},description:""},imageSize:{required:!0,tsType:{name:"union",raw:'"fill" | "native"',elements:[{name:"literal",value:'"fill"'},{name:"literal",value:'"native"'}]},description:""}}};var cf_card_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_card_services_t;const CardQuery=(0,lib.J1)(cf_card_services_t||(cf_card_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    card(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      cardType
      headline
      bodyCopy {
        json
      }
      image {
        ...Image
      }
      imageSize
      sys {
        id
      }
    }
  }
`),ImageFragment),CardSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height:275});CardSkeleton.__docgenInfo={description:"",methods:[],displayName:"CardSkeleton"};var cf_card_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,preview,lang})=>{let data;try{data=await(async(id,preview=!1,locale=i18n.q)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:CardQuery,variables:{id,preview,locale}})).data.card}catch(error){throw cf_card_services_console.error("Error fetching data:",error),error}})(id,preview)}catch(error){return cf_card_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(CardSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfCard,{internalTitle:data.internalTitle,cardType:data.cardType,headline:data.headline,bodyCopy:data.bodyCopy,image:data.image,imageSize:data.imageSize,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(CardSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"CfCardServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}};const CfCardSlider=({internalTitle,headline,bodyCopy,cards,preview,id,lang,__typename})=>{const sliderId=`${generateId(internalTitle)}-cardSlider`;return(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,children:(0,jsx_runtime.jsx)(ui.mc,{children:(0,jsx_runtime.jsxs)(ui.fI,{spacing:{xs:"2.5rem",md:"3rem"},children:[(0,jsx_runtime.jsxs)(ui.fv,{size:{xs:12,sm:6,md:4,lg:3,xl:3},children:[(0,jsx_runtime.jsxs)(ui.az,{children:[headline&&(0,jsx_runtime.jsx)(ui.H2,{...dist.pI.getProps({entryId:id,fieldId:"headline",locale:lang}),children:headline}),bodyCopy&&(0,jsx_runtime.jsx)(ui.az,{style:{maxWidth:theme.fi.values.sm,marginBottom:"4rem"},children:(0,jsx_runtime.jsx)(CfRichTextRender,{richTextDocument:bodyCopy.json,alignment:"Left",lang,preview,...dist.pI.getProps({entryId:id,fieldId:"bodyCopy",locale:lang})})})]}),(0,jsx_runtime.jsxs)(ui.az,{style:{display:"flex",gap:"0.75rem"},children:[(0,jsx_runtime.jsx)(ui.Yd,{id:sliderId,direction:"prev"}),(0,jsx_runtime.jsx)(ui.Yd,{id:sliderId,direction:"next"})]})]}),(0,jsx_runtime.jsx)(ui.fv,{size:{xs:12,sm:6,md:8,lg:9},children:(0,jsx_runtime.jsx)(ui.az,{...dist.pI.getProps({entryId:id,fieldId:"cards",locale:lang}),children:(0,jsx_runtime.jsx)(ui.Ap,{id:sliderId,slidesPerView:{xs:1,md:2,lg:3},loop:!0,offsetSlideBoxShadow:!0,children:cards.map(((card,index)=>(0,jsx_runtime.jsx)(CfCard,{internalTitle:`${generateId(internalTitle)}-${index}`,cardType:card.cardType,headline:card.headline,bodyCopy:card.bodyCopy,image:card.image,imageSize:card.imageSize,__typename:card.__typename,id,lang,preview},index)))})})})]})})})};CfCardSlider.__docgenInfo={description:"",methods:[],displayName:"CfCardSlider",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},headline:{required:!1,tsType:{name:"string"},description:""},bodyCopy:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  json: Document;\n}",signature:{properties:[{key:"json",value:{name:"Document",required:!0}}]}},description:""},cards:{required:!0,tsType:{name:"Array",elements:[{name:"CfCardProps"}],raw:"CfCardProps[]"},description:""}}};var cf_card_slider_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_card_slider_services_t;const CardSliderQuery=(0,lib.J1)(cf_card_slider_services_t||(cf_card_slider_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    cardSlider(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      bodyCopy {
        json
      }
      cardsCollection(limit: 12) {
        items {
          cardType
          headline
          bodyCopy {
            json
          }
          image {
            ...Image
          }
          imageSize
        }
      }
      sys {
        id
      }
    }
  }
`),ImageFragment),CardSliderSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height:275});CardSliderSkeleton.__docgenInfo={description:"",methods:[],displayName:"CardSliderSkeleton"};var cf_card_slider_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,lang,preview})=>{var _data_cardsCollection;let data;try{data=await(async(id,preview=!1,locale=i18n.q)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:CardSliderQuery,variables:{id,preview,locale}})).data.cardSlider}catch(error){throw cf_card_slider_services_console.error("Error fetching data:",error),error}})(id)}catch(error){return cf_card_slider_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(CardSliderSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfCardSlider,{internalTitle:data.internalTitle,headline:data.headline,bodyCopy:data.bodyCopy,border:data.border,cards:null===(_data_cardsCollection=data.cardsCollection)||void 0===_data_cardsCollection?void 0:_data_cardsCollection.items,__typename:data.__typename,lang,id,preview}):(0,jsx_runtime.jsx)(CardSliderSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"CfCardSliderServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}};const CfHeader=({internalTitle,headline,headerType="H2",alignment="Left",containerWidth="Default",marginBottom={xs:theme.dW.xs},nested,__typename,id,lang})=>(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,marginBottom,children:(0,jsx_runtime.jsx)(ui.mc,{disableGutters:nested,noPadding:nested,maxWidth:nested||"Narrow"!==containerWidth?"xl":"md",children:(0,jsx_runtime.jsx)(ui.az,{style:{display:"flex",flexDirection:"column",alignItems:"Center"===alignment?"center":"Right"===alignment?"flex-end":"flex-start",textAlign:alignment.toLowerCase()},...dist.pI.getProps({entryId:id,fieldId:"headline",locale:lang}),children:(({headerType,headline})=>{switch(headerType){case"H1":return(0,jsx_runtime.jsx)(ui.H1,{children:headline});case"H2":default:return(0,jsx_runtime.jsx)(ui.H2,{children:headline});case"H3":return(0,jsx_runtime.jsx)(ui.H3,{children:headline});case"H4":return(0,jsx_runtime.jsx)(ui.H4,{children:headline});case"H5":return(0,jsx_runtime.jsx)(ui.H5,{children:headline});case"H6":return(0,jsx_runtime.jsx)(ui.H6,{children:headline})}})({headerType,headline})})})});CfHeader.__docgenInfo={description:"",methods:[],displayName:"CfHeader",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},headline:{required:!0,tsType:{name:"string"},description:""},headerType:{required:!1,tsType:{name:"union",raw:'"H1" | "H2" | "H3" | "H4" | "H5" | "H6"',elements:[{name:"literal",value:'"H1"'},{name:"literal",value:'"H2"'},{name:"literal",value:'"H3"'},{name:"literal",value:'"H4"'},{name:"literal",value:'"H5"'},{name:"literal",value:'"H6"'}]},description:"",defaultValue:{value:'"H2"',computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:'"Left" | "Center" | "Right"',elements:[{name:"literal",value:'"Left"'},{name:"literal",value:'"Center"'},{name:"literal",value:'"Right"'}]},description:"",defaultValue:{value:'"Left"',computed:!1}},containerWidth:{required:!1,tsType:{name:"union",raw:'"Default" | "Narrow"',elements:[{name:"literal",value:'"Default"'},{name:"literal",value:'"Narrow"'}]},description:"",defaultValue:{value:'"Default"',computed:!1}},marginBottom:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  xs?: string | number;\n  sm?: string | number;\n  md?: string | number;\n  lg?: string | number;\n  xl?: string | number;\n}",signature:{properties:[{key:"xs",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"sm",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"md",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"lg",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}},{key:"xl",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}}]}},description:"",defaultValue:{value:"{ xs: componentSpacing.xs }",computed:!1}},nested:{required:!1,tsType:{name:"boolean"},description:""}}};var cf_header_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_header_services_t;const HeaderQuery=(0,lib.J1)(cf_header_services_t||(cf_header_services_t=(t=>t)`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    header(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      headerType
      alignment
      containerWidth
      sys {
        id
      }
    }
  }
`)),HeaderSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height:275});HeaderSkeleton.__docgenInfo={description:"",methods:[],displayName:"HeaderSkeleton"};var cf_header_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,preview,lang,nested})=>{let data;try{data=await(async(id,preview=!1,locale=i18n.q)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:HeaderQuery,variables:{id,preview,locale}})).data.header}catch(error){throw cf_header_services_console.error("Error fetching data:",error),error}})(id,preview)}catch(error){return cf_header_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(HeaderSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfHeader,{internalTitle:data.internalTitle,headline:data.headline,headerType:data.headerType,alignment:data.alignment,containerWidth:data.containerWidth,nested,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(HeaderSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"CfHeaderServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},nested:{required:!1,tsType:{name:"boolean"},description:""}}};const ImageSkeleton=({height=340,...rest})=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height,...rest});ImageSkeleton.__docgenInfo={description:"",methods:[],displayName:"ImageSkeleton",props:{height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"340",computed:!1}}}};const CfImage=({internalTitle,image,altText="",nested=!1,responsive=!0,maxWidth,maxHeight,__typename,id,lang})=>(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,marginY:{xs:nested?"":theme.dW.xs,md:nested?"":theme.dW.md},children:(0,jsx_runtime.jsx)(ui.mc,{disableGutters:nested,noPadding:nested,maxWidth:!nested&&"xl",children:image&&image.url?(0,jsx_runtime.jsx)(ui._V,{url:image.url,alt:altText,width:image.width,height:image.height,responsive,maxWidth,maxHeight,...dist.pI.getProps({entryId:id,fieldId:"image",locale:lang})}):(0,jsx_runtime.jsx)(ImageSkeleton,{...dist.pI.getProps({entryId:id,fieldId:"image",locale:lang})})})}),CfImageCover=({internalTitle,image,altText="",nested=!1,coverWidth="100%",coverHeight="380px",__typename,id,lang})=>(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,marginY:{xs:nested?"":theme.dW.xs,md:nested?"":theme.dW.md},children:(0,jsx_runtime.jsx)(ui.mc,{disableGutters:nested,noPadding:nested,maxWidth:!nested&&"xl",children:image&&image.url?(0,jsx_runtime.jsx)(ui.Hh,{url:image.url,alt:altText,width:image.width,height:image.height,coverWidth,coverHeight,...dist.pI.getProps({entryId:id,fieldId:"image",locale:lang})}):(0,jsx_runtime.jsx)(ImageSkeleton,{...dist.pI.getProps({entryId:id,fieldId:"image",locale:lang})})})});CfImage.__docgenInfo={description:"",methods:[],displayName:"CfImage",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},image:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  url: string;\n  width: number;\n  height: number;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}},description:""},maxWidth:{required:!1,tsType:{name:"number"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:""},altText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},nested:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}},CfImageCover.__docgenInfo={description:"",methods:[],displayName:"CfImageCover",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},image:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  url: string;\n  width: number;\n  height: number;\n}",signature:{properties:[{key:"url",value:{name:"string",required:!0}},{key:"width",value:{name:"number",required:!0}},{key:"height",value:{name:"number",required:!0}}]}},description:""},maxWidth:{required:!1,tsType:{name:"number"},description:""},maxHeight:{required:!1,tsType:{name:"number"},description:""},altText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},nested:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:""},coverWidth:{required:!1,tsType:{name:"ResponsiveStyleValue",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"ResponsiveStyleValue<string | number>"},description:"",defaultValue:{value:'"100%"',computed:!1}},coverHeight:{required:!1,tsType:{name:"ResponsiveStyleValue",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"ResponsiveStyleValue<string | number>"},description:"",defaultValue:{value:'"380px"',computed:!1}}}};var cf_image_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_image_services_t;const ImageQuery=(0,lib.J1)(cf_image_services_t||(cf_image_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    image(id: $id, preview: $preview, locale: $locale) {
      ...Image
    }
  }
`),ImageFragment),fetchImageData=async(id,preview=!1,locale="en-US")=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:ImageQuery,variables:{id,preview,locale}})).data.image}catch(error){throw cf_image_services_console.error("Error fetching data:",error),error}};var cf_image_console=__webpack_require__("./node_modules/console-browserify/index.js");const CfImageServer=async({id,preview,lang,nested,responsive})=>{let data;try{data=await fetchImageData(id,preview,lang)}catch(error){return cf_image_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(ImageSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfImage,{internalTitle:data.internalTitle,image:data.image,nested,responsive,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(ImageSkeleton,{})};CfImageServer.__docgenInfo={description:"",methods:[],displayName:"CfImageServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},nested:{required:!1,tsType:{name:"boolean"},description:""},responsive:{required:!1,tsType:{name:"boolean"},description:""}}};var next_link=__webpack_require__("./node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);const LinkInheritStyles={fontSize:"inherit",color:"inherit",textDecoration:"inherit"},BaseLink=({linkType,pageLink,customLink,target,className,style,children,lang})=>linkType===CfLinkTypes.PageLink&&pageLink?pageLink.specialtyPage&&pageLink.specialtyPage===pages_types_SpecialtyPages.Homepage?(0,jsx_runtime.jsx)(link_default(),{href:pages_types_RouteDirectory.Homepage,hrefLang:lang,target,className,style:{...LinkInheritStyles,...style},children}):(0,jsx_runtime.jsx)(link_default(),{href:`/${pageLink.parentPage?`${pageLink.parentPage.slug}/`:""}${pageLink.slug}`,hrefLang:lang,target,className,style:{...LinkInheritStyles,...style},children}):linkType===CfLinkTypes.CustomLink&&customLink?(0,jsx_runtime.jsx)(link_default(),{href:customLink,hrefLang:lang,target,className,style:{...LinkInheritStyles,...style},children}):(0,jsx_runtime.jsx)(link_default(),{href:"#",hrefLang:lang,target,className,style:{...LinkInheritStyles,...style},children}),CfLink=({linkType,pageLink,customLink,target,className,style,children,lang})=>(0,jsx_runtime.jsx)(BaseLink,{linkType,pageLink,customLink,target,className,style,lang,children});BaseLink.__docgenInfo={description:"",methods:[],displayName:"BaseLink",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},linkType:{required:!0,tsType:{name:"CfLinkTypes"},description:""},pageLink:{required:!1,tsType:{name:"PageLinkProps"},description:""},customLink:{required:!1,tsType:{name:"string"},description:""},target:{required:!0,tsType:{name:"union",raw:'"_self" | "_blank"',elements:[{name:"literal",value:'"_self"'},{name:"literal",value:'"_blank"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"string"},description:""}}},CfLink.__docgenInfo={description:"",methods:[],displayName:"CfLink",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},linkType:{required:!0,tsType:{name:"CfLinkTypes"},description:""},pageLink:{required:!1,tsType:{name:"PageLinkProps"},description:""},customLink:{required:!1,tsType:{name:"string"},description:""},target:{required:!0,tsType:{name:"union",raw:'"_self" | "_blank"',elements:[{name:"literal",value:'"_self"'},{name:"literal",value:'"_blank"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"string"},description:""}}};var cf_link_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_link_services_t;const LinkQuery=(0,lib.J1)(cf_link_services_t||(cf_link_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    link(id: $id, preview: $preview, locale: $locale) {
      ...Link
    }
  }
`),LinkFragment),LinkSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{variant:"text",width:"100%",height:8});LinkSkeleton.__docgenInfo={description:"",methods:[],displayName:"LinkSkeleton"};var cf_link_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,preview,lang,children})=>{let data;try{data=await(async(id,preview=!1,locale="en-US")=>{try{return(await client_cfClient.query({query:LinkQuery,variables:{id,preview,locale}})).data.link}catch(error){throw cf_link_services_console.error("Error fetching data:",error),error}})(id,preview,lang)}catch(error){return cf_link_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(LinkSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfLink,{linkType:data.linkType,pageLink:data.pageLink,customLink:data.customLink,target:data.target,lang,children}):(0,jsx_runtime.jsx)(LinkSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"CfLinkServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const CfTextLink=({link,title,id,lang})=>(0,jsx_runtime.jsx)(CfLink,{linkType:link.linkType,pageLink:link.pageLink,customLink:link.customLink,target:link.target,lang,children:(0,jsx_runtime.jsx)(ui.tM,{component:"span",...dist.pI.getProps({entryId:id,fieldId:"title",locale:lang}),children:title})});CfTextLink.__docgenInfo={description:"",methods:[],displayName:"CfTextLink",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},link:{required:!0,tsType:{name:"CfLinkProps"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};var cf_link_text_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_link_text_services_t;const LinkTextQuery=(0,lib.J1)(cf_link_text_services_t||(cf_link_text_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    linkText(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      title
      link {
        ...Link
      }
      sys {
        id
      }
    }
  }
`),LinkFragment),skeleton_LinkSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{variant:"text",width:"100%",height:8});skeleton_LinkSkeleton.__docgenInfo={description:"",methods:[],displayName:"LinkSkeleton"};var cf_link_text_console=__webpack_require__("./node_modules/console-browserify/index.js");const CfLinkTextServer=async({id,preview,lang})=>{let data;try{data=await(async(id,preview=!1,locale="en-US")=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:LinkTextQuery,variables:{id,preview,locale}})).data.linkText}catch(error){throw cf_link_text_services_console.error("Error fetching data:",error),error}})(id,preview,lang)}catch(error){return cf_link_text_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(skeleton_LinkSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfTextLink,{internalTitle:data.internalTitle,link:data.link,title:data.title,__typename:data.__typename,id:data.sys.id,lang,preview}):(0,jsx_runtime.jsx)(skeleton_LinkSkeleton,{})};CfLinkTextServer.__docgenInfo={description:"",methods:[],displayName:"CfLinkTextServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}};var cf_video_embed_style_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/libs/cf/lib/cf-video-embed/style.module.css"),style_module_options={};style_module_options.styleTagTransform=styleTagTransform_default(),style_module_options.setAttributes=setAttributesWithoutAttributes_default(),style_module_options.insert=insertBySelector_default().bind(null,"head"),style_module_options.domAPI=styleDomAPI_default(),style_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(cf_video_embed_style_module.A,style_module_options);const lib_cf_video_embed_style_module=cf_video_embed_style_module.A&&cf_video_embed_style_module.A.locals?cf_video_embed_style_module.A.locals:void 0,CfVideoEmbed=({internalTitle,embedCode,nested,__typename,id,lang})=>(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,marginY:{xs:nested?"":theme.dW.xs,md:nested?"":theme.dW.md},children:(0,jsx_runtime.jsx)(ui.mc,{disableGutters:nested,noPadding:nested,maxWidth:!nested&&"xl",children:(0,jsx_runtime.jsx)("div",{dangerouslySetInnerHTML:{__html:embedCode},className:lib_cf_video_embed_style_module.videoEmbed,...dist.pI.getProps({entryId:id,fieldId:"embed",locale:lang})})})});CfVideoEmbed.__docgenInfo={description:"",methods:[],displayName:"CfVideoEmbed",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},embedCode:{required:!0,tsType:{name:"string"},description:""},nested:{required:!1,tsType:{name:"boolean"},description:""}}};var cf_video_embed_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_video_embed_services_t;const VideoEmbedQuery=(0,lib.J1)(cf_video_embed_services_t||(cf_video_embed_services_t=(t=>t)`
  query ($id: String!, $preview: Boolean!) {
    videoEmbed(id: $id, preview: $preview) {
      internalTitle
      embedCode
      sys {
        id
      }
    }
  }
`)),VideoEmbedSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height:275});VideoEmbedSkeleton.__docgenInfo={description:"",methods:[],displayName:"VideoEmbedSkeleton"};var cf_video_embed_console=__webpack_require__("./node_modules/console-browserify/index.js");const CfVideoEmbedServer=async({id,preview,lang,nested})=>{let data;try{data=await(async(id,preview=!1,locale=i18n.q)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:VideoEmbedQuery,variables:{id,preview,locale}})).data.videoEmbed}catch(error){throw cf_video_embed_services_console.error("Error fetching data:",error),error}})(id,preview,lang)}catch(error){return cf_video_embed_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(VideoEmbedSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfVideoEmbed,{internalTitle:data.internalTitle,embedCode:data.embedCode,nested,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(VideoEmbedSkeleton,{})};CfVideoEmbedServer.__docgenInfo={description:"",methods:[],displayName:"CfVideoEmbedServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},nested:{required:!1,tsType:{name:"boolean"},description:""}}};const CfLockup=({internalTitle,headline,bodyCopy,buttonsCollection,media,mediaSize,mediaAlignment,__typename,id,lang,preview,mock,mockData})=>{const colSize={content:"Wide"===mediaSize?4:"Narrow"===mediaSize?8:6,media:"Wide"===mediaSize?8:"Narrow"===mediaSize?4:6};return(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,marginY:{xs:theme.dW.md,md:theme.dW.xl},children:(0,jsx_runtime.jsx)(ui.mc,{children:(0,jsx_runtime.jsxs)(ui.fI,{rowSpacing:4,columnSpacing:12,flexDirection:"Left"===mediaAlignment?"row-reverse":"row",alignItems:"center",...dist.pI.getProps({entryId:id,fieldId:"mediaAlignment",locale:lang}),children:[(headline||bodyCopy||buttonsCollection&&(null==buttonsCollection?void 0:buttonsCollection.items.length)>0)&&(0,jsx_runtime.jsxs)(ui.fv,{size:{xs:12,md:colSize.content},paddingRight:{xs:0,md:8},children:[headline&&(0,jsx_runtime.jsx)(ui.H2,{marginBottom:8,...dist.pI.getProps({entryId:id,fieldId:"headline",locale:lang}),children:headline}),bodyCopy&&(0,jsx_runtime.jsx)(CfRichTextRender,{richTextDocument:bodyCopy.json,alignment:"Left",lang,preview,...dist.pI.getProps({entryId:id,fieldId:"bodyCopy",locale:lang})}),buttonsCollection&&(0,jsx_runtime.jsx)(ui.az,{style:{display:"flex",gap:"0.75rem",marginTop:bodyCopy?8:0},children:buttonsCollection.items.map(((button,index)=>{var _button_sys;return(0,jsx_runtime.jsx)(CfButton,{internalTitle:button.internalTitle,title:button.title,link:button.link,buttonStyle:button.buttonStyle,__typename:button.__typename,id:(null==button||null===(_button_sys=button.sys)||void 0===_button_sys?void 0:_button_sys.id)||"",preview,lang},index)}))})]}),(0,jsx_runtime.jsx)(ui.fv,{size:{xs:12,md:colSize.media},children:mock?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:mockData}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Image"===media.__typename&&(0,jsx_runtime.jsx)(CfImageServer,{id:media.sys.id,preview,lang,nested:!0}),"VideoEmbed"===media.__typename&&(0,jsx_runtime.jsx)(CfVideoEmbedServer,{id:media.sys.id,preview,lang,nested:!0})]})})]})})})};CfLockup.__docgenInfo={description:"",methods:[],displayName:"CfLockup",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},nested:{required:!1,tsType:{name:"boolean"},description:""},mock:{required:!1,tsType:{name:"boolean"},description:""},mockData:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},headline:{required:!1,tsType:{name:"string"},description:""},bodyCopy:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  json: Document;\n}",signature:{properties:[{key:"json",value:{name:"Document",required:!0}}]}},description:""},buttonsCollection:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  items: CfButtonProps[];\n}",signature:{properties:[{key:"items",value:{name:"Array",elements:[{name:"CfButtonProps"}],raw:"CfButtonProps[]",required:!0}}]}},description:""},media:{required:!0,tsType:{name:"intersection",raw:"CfSystemId & { __typename: string }",elements:[{name:"CfSystemId"},{name:"signature",type:"object",raw:"{ __typename: string }",signature:{properties:[{key:"__typename",value:{name:"string",required:!0}}]}}]},description:""},mediaSize:{required:!0,tsType:{name:"union",raw:'"Default" | "Wide" | "Narrow"',elements:[{name:"literal",value:'"Default"'},{name:"literal",value:'"Wide"'},{name:"literal",value:'"Narrow"'}]},description:""},mediaAlignment:{required:!0,tsType:{name:"union",raw:'"Left" | "Right"',elements:[{name:"literal",value:'"Left"'},{name:"literal",value:'"Right"'}]},description:""}}};var cf_lockup_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_lockup_services_t;const LockupQuery=(0,lib.J1)(cf_lockup_services_t||(cf_lockup_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    lockup(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      bodyCopy {
        json
      }
      buttonsCollection(limit: 2) {
        items {
          ...Button
        }
      }
      media {
        __typename
        ... on Image {
          sys {
            id
          }
        }
        ... on VideoEmbed {
          sys {
            id
          }
        }
      }
      mediaSize
      mediaAlignment
      sys {
        id
      }
    }
  }
`),ButtonFragment),LockupSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height:275});LockupSkeleton.__docgenInfo={description:"",methods:[],displayName:"LockupSkeleton"};var cf_lockup_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,preview,lang})=>{let data;try{data=await(async(id,preview=!1,locale=i18n.q)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:LockupQuery,variables:{id,preview,locale}})).data.lockup}catch(error){throw cf_lockup_services_console.error("Error fetching data:",error),error}})(id,preview,lang)}catch(error){return cf_lockup_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(LockupSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfLockup,{internalTitle:data.internalTitle,headline:data.headline,bodyCopy:data.bodyCopy,buttonsCollection:data.buttonsCollection,media:data.media,mediaSize:data.mediaSize,mediaAlignment:data.mediaAlignment,nested:data.nested,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(LockupSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"CfLockupServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}};var cf_logo_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_logo_services_t;const LogoQuery=(0,lib.J1)(cf_logo_services_t||(cf_logo_services_t=(t=>t)`
  ${0}

  query ($id: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $id }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        fullColorLogo {
          ...Image
        }
        knockoutLogo {
          ...Image
        }
      }
    }
  }
`),ImageFragment),Logo=({variant,logos,width={xs:180},lang=i18n.q,preview=!1})=>{var _logo_sys;const logo="knockoutLogo"===variant?logos.knockoutLogo:logos.fullColorLogo;return(0,jsx_runtime.jsx)(ui.az,{width,children:(0,jsx_runtime.jsx)(CfImage,{id:(null===(_logo_sys=logo.sys)||void 0===_logo_sys?void 0:_logo_sys.id)||"",internalTitle:logo.internalTitle,nested:!0,responsive:!0,image:logo.image,altText:logo.altText,lang,preview,__typename:logo.__typename})})};Logo.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{variant:{required:!0,tsType:{name:"union",raw:'"fullColorLogo" | "knockoutLogo"',elements:[{name:"literal",value:'"fullColorLogo"'},{name:"literal",value:'"knockoutLogo"'}]},description:""},logos:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  knockoutLogo: CfImageType;\n  fullColorLogo: CfImageType;\n}",signature:{properties:[{key:"knockoutLogo",value:{name:"CfImageType",required:!0}},{key:"fullColorLogo",value:{name:"CfImageType",required:!0}}]}},description:""},width:{required:!1,tsType:{name:"ResponsiveStyleValue",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"ResponsiveStyleValue<string | number>"},description:"",defaultValue:{value:"{ xs: 180 }",computed:!1}},lang:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"en-US"',computed:!1}},preview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const LogoSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{variant:"rectangular",width:185,height:60});LogoSkeleton.__docgenInfo={description:"",methods:[],displayName:"LogoSkeleton"};var cf_logo_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,preview=!1,lang=i18n.q,variant="fullColorLogo",width={xs:180}})=>{let data;try{data=await(async(id,preview,lang)=>{const client=preview?client_cfPreviewClient:client_cfClient;try{const response=await client.query({query:LogoQuery,variables:{id,preview,lang}});return{fullColorLogo:response.data.appsCollection.items[0].fullColorLogo,knockoutLogo:response.data.appsCollection.items[0].knockoutLogo}}catch(error){throw cf_logo_services_console.error("Error fetching data:",error),error}})(id,preview,lang)}catch(error){return cf_logo_console.error("Failed to fetch example data:",error),(0,jsx_runtime.jsx)(LogoSkeleton,{})}return data?(0,jsx_runtime.jsx)(Logo,{variant,logos:data,width,lang,preview}):(0,jsx_runtime.jsx)(LogoSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"LogoServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"en-US"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"fullColorLogo" | "knockoutLogo"',elements:[{name:"literal",value:'"fullColorLogo"'},{name:"literal",value:'"knockoutLogo"'}]},description:"",defaultValue:{value:'"fullColorLogo"',computed:!1}},width:{required:!1,tsType:{name:"ResponsiveStyleValue",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"ResponsiveStyleValue<string | number>"},description:"",defaultValue:{value:"{ xs: 180 }",computed:!1}}}};const CfRichTextSection=({internalTitle,alignment,containerWidth,grayBackground,bodyCopy,border,__typename,id,lang,preview})=>(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,border,bgcolor:grayBackground?"grey.100":void 0,children:(0,jsx_runtime.jsx)(ui.mc,{maxWidth:"Narrow"===containerWidth?"md":"xl",children:(0,jsx_runtime.jsx)(CfRichTextRender,{richTextDocument:bodyCopy.json,alignment,lang,preview,...dist.pI.getProps({entryId:id,fieldId:"bodyCopy",locale:lang})})})});CfRichTextSection.__docgenInfo={description:"",methods:[],displayName:"CfRichTextSection",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},alignment:{required:!0,tsType:{name:"union",raw:'"Left" | "Center" | "Right"',elements:[{name:"literal",value:'"Left"'},{name:"literal",value:'"Center"'},{name:"literal",value:'"Right"'}]},description:""},containerWidth:{required:!0,tsType:{name:"union",raw:'"Default" | "Narrow"',elements:[{name:"literal",value:'"Default"'},{name:"literal",value:'"Narrow"'}]},description:""},grayBackground:{required:!0,tsType:{name:"boolean"},description:""},bodyCopy:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  json: Document;\n}",signature:{properties:[{key:"json",value:{name:"Document",required:!0}}]}},description:""},border:{required:!0,tsType:{name:"union",raw:'"None" | "Top" | "Bottom" | "Top & Bottom"',elements:[{name:"literal",value:'"None"'},{name:"literal",value:'"Top"'},{name:"literal",value:'"Bottom"'},{name:"literal",value:'"Top & Bottom"'}]},description:""}}};var cf_rich_text_section_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_rich_text_section_services_t;const RichTextSectionQuery=(0,lib.J1)(cf_rich_text_section_services_t||(cf_rich_text_section_services_t=(t=>t)`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    richTextSection(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      alignment
      containerWidth
      grayBackground
      bodyCopy {
        json
      }
      border
      sys {
        id
      }
    }
  }
`)),RichTextSectionSkeleton=()=>(0,jsx_runtime.jsx)(ui.EA,{width:"100%",height:275});RichTextSectionSkeleton.__docgenInfo={description:"",methods:[],displayName:"RichTextSectionSkeleton"};var cf_rich_text_section_console=__webpack_require__("./node_modules/console-browserify/index.js");(async({id,preview,lang})=>{let data;try{data=await(async(id,preview=!1,locale="en-US")=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:RichTextSectionQuery,variables:{id,preview,locale}})).data.richTextSection}catch(error){throw cf_rich_text_section_services_console.error("Error fetching data:",error),error}})(id,preview)}catch(error){return cf_rich_text_section_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(RichTextSectionSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfRichTextSection,{internalTitle:data.internalTitle,alignment:data.alignment,containerWidth:data.containerWidth,grayBackground:data.grayBackground,bodyCopy:data.bodyCopy,border:data.border,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(RichTextSectionSkeleton,{})}).__docgenInfo={description:"",methods:[],displayName:"CfRichTextSectionServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}};const render_mapAlignment=alignment=>{const lowerCaseAlignment=alignment.toLowerCase();switch(lowerCaseAlignment){case"center":case"inherit":case"justify":case"left":case"right":return lowerCaseAlignment;default:return}},ListRichTextRenderer=({richTextDocument,alignment="Left",bulletIcon,...rest})=>{const CfText=({children})=>(0,jsx_runtime.jsx)(ui.EY,{align:render_mapAlignment(alignment),style:{fontSize:"inherit",lineHeight:"inherit",marginBottom:"1rem","&:last-child":{marginBottom:0}},children}),CfUlList=({children})=>(0,jsx_runtime.jsx)(ui.az,{component:"ul",marginBottom:8,className:"CfStyledList-ul",style:{"& .CfStyledList-li":{color:"common.black",paddingLeft:0,marginLeft:0},"& .CfStyledList-li::before":{content:"none"}},children:react.Children.map(children,((child,index)=>react.isValidElement(child)?(0,jsx_runtime.jsxs)(ui.pT,{component:"li",alignItems:"center",className:"CfStyledList-li",gap:2,marginBottom:3,children:[(0,jsx_runtime.jsx)(ui.In,{icon:bulletIcon,size:20,style:{flexShrink:0}}),child.props.children]},index):null))}),options={renderNode:{[rich_text_types_dist.BLOCKS.PARAGRAPH]:(node,children)=>(0,jsx_runtime.jsx)(CfText,{children}),[rich_text_types_dist.BLOCKS.UL_LIST]:(node,children)=>(0,jsx_runtime.jsx)(CfUlList,{children})}};return(0,jsx_runtime.jsx)("div",{...rest,children:(0,rich_text_react_renderer_es5.i)(richTextDocument,options)})},CfStyledList=({internalTitle,bulletIcon,list,__typename,id,lang,preview})=>(0,jsx_runtime.jsx)(ui.az,{id:generateId(internalTitle),"data-component":__typename,...dist.pI.getProps({entryId:id,fieldId:"list",locale:lang}),children:(0,jsx_runtime.jsx)(ListRichTextRenderer,{bulletIcon,richTextDocument:list.json,lang,preview})});CfStyledList.__docgenInfo={description:"",methods:[],displayName:"CfStyledList",props:{__typename:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},internalTitle:{required:!0,tsType:{name:"string"},description:""},lang:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},sys:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  id: string;\n}",signature:{properties:[{key:"id",value:{name:"string",required:!0}}]}},description:""},bulletIcon:{required:!0,tsType:{name:"literal",value:'"CheckCircle"'},description:""},list:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  json: Document;\n}",signature:{properties:[{key:"json",value:{name:"Document",required:!0}}]}},description:""}}};var cf_styled_list_services_console=__webpack_require__("./node_modules/console-browserify/index.js");let cf_styled_list_services_t;const StyledListQuery=(0,lib.J1)(cf_styled_list_services_t||(cf_styled_list_services_t=(t=>t)`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    styledList(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      bulletIcon
      list {
        json
      }
      sys {
        id
      }
    }
  }
`)),StyledListSkeleton=()=>(0,jsx_runtime.jsx)(ui.B8,{style:{columnCount:{xs:1,md:2},columnGap:12,paddingBottom:0},children:Array.from({length:3}).map(((_,index)=>(0,jsx_runtime.jsx)(ui.ck,{style:{alignItems:"flex-start",display:"flex",marginBottom:"18px !important"},children:(0,jsx_runtime.jsxs)(ui.pT,{alignItems:"center",style:{width:"100%"},children:[(0,jsx_runtime.jsx)(ui.EA,{variant:"rectangular",width:18,height:12,style:{marginRight:3}}),(0,jsx_runtime.jsx)(ui.EA,{variant:"text",height:24,width:"100%"})]})},index)))});StyledListSkeleton.__docgenInfo={description:"",methods:[],displayName:"StyledListSkeleton"};var cf_styled_list_console=__webpack_require__("./node_modules/console-browserify/index.js");const CfStyledListServer=async({id,preview,lang})=>{let data;try{data=await(async(id,preview=!1,locale="en-US")=>{const client=preview?client_cfPreviewClient:client_cfClient;try{return(await client.query({query:StyledListQuery,variables:{id,preview,locale}})).data.styledList}catch(error){throw cf_styled_list_services_console.error("Error fetching data:",error),error}})(id,preview)}catch(error){return cf_styled_list_console.error("Failed to fetch data:",error),(0,jsx_runtime.jsx)(StyledListSkeleton,{})}return data?(0,jsx_runtime.jsx)(CfStyledList,{internalTitle:data.internalTitle,bulletIcon:data.bulletIcon,list:data.list,__typename:data.__typename,id,lang,preview}):(0,jsx_runtime.jsx)(StyledListSkeleton,{})};CfStyledListServer.__docgenInfo={description:"",methods:[],displayName:"CfStyledListServer",props:{id:{required:!0,tsType:{name:"string"},description:""},preview:{required:!0,tsType:{name:"boolean"},description:""},lang:{required:!0,tsType:{name:"string"},description:""}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/libs/cf/lib/cf-rich-text-render/style.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.style_richText__AtnpR p + ul,\n.style_richText__AtnpR p + ol {\n  margin-top: -0.75rem;\n}\n\n.style_richText__AtnpR ul,\n.style_richText__AtnpR ol {\n  margin: 0 0 2rem;\n  padding: 0;\n  list-style: none;\n}\n\n.style_richText__AtnpR ul li,\n.style_richText__AtnpR ol li {\n  background-image: none;\n  background-repeat: no-repeat;\n  background-position: left 8px;\n  font-weight: 400;\n  line-height: 26px;\n  font-size: 15px;\n  list-style-type: none;\n  list-style-position: inside;\n  margin-bottom: 8px;\n  padding-left: 16px;\n  position: relative;\n}\n\n.style_richText__AtnpR ul li p,\n.style_richText__AtnpR ol li p {\n  padding-bottom: 0;\n}\n\n.style_richText__AtnpR ul li:before {\n  background-color: #a3a3a3;\n  border-radius: 50%;\n  content: "";\n  height: 5px;\n  left: 0;\n  position: absolute;\n  top: 0.7em;\n  transform: translateY(-50%);\n  width: 5px;\n}\n\n.style_richText__AtnpR blockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 18px;\n  border-left: 5px solid #eee;\n}\n\n.style_richText__AtnpR blockquote ol:last-child,\n.style_richText__AtnpR blockquote p:last-child,\n.style_richText__AtnpR blockquote ul:last-child {\n  margin-bottom: 0;\n}\n\n.style_richText__AtnpR a {\n  color: #1f7ef6;\n  text-decoration: none;\n}\n',"",{version:3,sources:["webpack://./src/libs/cf/lib/cf-rich-text-render/style.module.css"],names:[],mappings:"AAAA;;EAEE,oBAAoB;AACtB;;AAEA;;EAEE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;AAClB;;AAEA;;EAEE,sBAAsB;EACtB,4BAA4B;EAC5B,6BAA6B;EAC7B,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,qBAAqB;EACrB,2BAA2B;EAC3B,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,OAAO;EACP,kBAAkB;EAClB,UAAU;EACV,2BAA2B;EAC3B,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB",sourcesContent:['.richText p + ul,\n.richText p + ol {\n  margin-top: -0.75rem;\n}\n\n.richText ul,\n.richText ol {\n  margin: 0 0 2rem;\n  padding: 0;\n  list-style: none;\n}\n\n.richText ul li,\n.richText ol li {\n  background-image: none;\n  background-repeat: no-repeat;\n  background-position: left 8px;\n  font-weight: 400;\n  line-height: 26px;\n  font-size: 15px;\n  list-style-type: none;\n  list-style-position: inside;\n  margin-bottom: 8px;\n  padding-left: 16px;\n  position: relative;\n}\n\n.richText ul li p,\n.richText ol li p {\n  padding-bottom: 0;\n}\n\n.richText ul li:before {\n  background-color: #a3a3a3;\n  border-radius: 50%;\n  content: "";\n  height: 5px;\n  left: 0;\n  position: absolute;\n  top: 0.7em;\n  transform: translateY(-50%);\n  width: 5px;\n}\n\n.richText blockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 18px;\n  border-left: 5px solid #eee;\n}\n\n.richText blockquote ol:last-child,\n.richText blockquote p:last-child,\n.richText blockquote ul:last-child {\n  margin-bottom: 0;\n}\n\n.richText a {\n  color: #1f7ef6;\n  text-decoration: none;\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={richText:"style_richText__AtnpR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/libs/cf/lib/cf-video-embed/style.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".style_videoEmbed__lA5WR {\n  width: 100%;\n  height: 100%;\n}\n\n.style_videoEmbed__lA5WR iframe {\n  width: 100% !important;\n  height: 100% !important;\n  aspect-ratio: 16 / 9;\n}\n","",{version:3,sources:["webpack://./src/libs/cf/lib/cf-video-embed/style.module.css"],names:[],mappings:"AAAA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,oBAAoB;AACtB",sourcesContent:[".videoEmbed {\n  width: 100%;\n  height: 100%;\n}\n\n.videoEmbed iframe {\n  width: 100% !important;\n  height: 100% !important;\n  aspect-ratio: 16 / 9;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={videoEmbed:"style_videoEmbed__lA5WR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=247.4d7dc3c4.iframe.bundle.js.map