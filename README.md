# Project : BODYLIKE
- [BODYLUV](https://bodyluv.kr/?cafe_mkt=ue_g_main_sa_own&utm_source=google&utm_medium=sa_own_cpc&utm_campaign=keyword&utm_term=%EB%B0%94%EB%94%94%EB%9F%BD&utm_content=bodyluv_main&gclid=CjwKCAjw3qGYBhBSEiwAcnTRLhhL1emCdcojfoOcM_XEchiM04lG6JcYCNpJsQroNer4_iK7fRzhcBoCJFYQAvD_BwE) 클론 사이트
- 욕실 용품 커머스 서비스

![BODYLIKE 메인페이지](https://velog.velcdn.com/images/nextlinehappy516/post/0e002503-851f-45c1-82a5-9f197f38e640/image.png)

<hr/>

## 개발 기간
- 2022-08-16 ~ 2022.08.26 (11일)

<hr/>

## 기술 스택
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Mysql 8.0-4479A1?style=for-the-badge&logo=Mysql&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">


<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white"> 
<img src="https://img.shields.io/badge/jsonwebtokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">

<hr/>

## 구성원 소개
- [백민석](https://github.com/sk8ilar)
- [이지현](https://github.com/LeeJ1Hyun)
- [프론트 엔드 github주소 보러가기](https://github.com/wecode-bootcamp-korea/36-1st-Team-Corner-frontend)

<hr/>

## &#127919; 구현 API 및 업무 소개
### 백민석
- ERD 모델링
- 회원가입 API (POST)
  - 정규표현식을 이용하여 email, password 유효성 검사를 하여 기능을 구현
  - 예를들어 password의 경우 영어 대소문자와 숫자를 포함한 6자리에서 16자리 이하의 자릿수를 토대로 유효성 검사 진행
- 로그인 API (POST)
  - jwt 발급
- 상품 조회 API (GET)
  - query parameter를 통하여 다양한 필터링 조건을 걸어 조회
  - 쿼리 트랜잭션을 이용하여 API에 요청을 보낼때마다 총 상품의 개수와 해당 페이지 상품의 정보를 동시에 보여줄 수 있게 작성
- 장바구니 API (GET/ DELETE/ PATCH)

<hr/>

## &#127919; 문제 해결 경험(내가 구현한 기능중)
- 메인페이나 카테고리 페이지에서 상품 정보를 페이지네이션해서 보여주기
  - 쿼리 파라미터와 쿼리 트랜잭션을 통해 
  - ```const getProductsByFilter = async(start, pageSize, cate, orderBy) =>{
    
    const queryRunner = appDataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction()
    
    try{ 
        if(!cate){cate = null}
        if(!orderBy){orderBy = null}
        
        const list = await queryRunner.query(
        `SELECT 
            id,
            name,
            price,
            detail,
            thumbnail_image_url,
            stock,
            category_id
        FROM products p 
        WHERE 
            CASE WHEN ${cate} IS NULL THEN p.category_id IS NOT NULL 
        WHEN ${cate} IS NOT NULL THEN p.category_id = ${cate} END
        ORDER BY 
            CASE WHEN ${orderBy} IS NULL THEN p.id 
            WHEN ${orderBy} IS NOT NULL THEN PRICE END
        LIMIT ${start},${pageSize}
        `
            ,)
        const listCount = await queryRunner.query(
            `SELECT count(*) 
            as count
            FROM products`
          );
        await queryRunner.commitTransaction()
        return [list, listCount];}
       
        catch (err) {
          await queryRunner.rollbackTransaction()
      } finally {
          await queryRunner.release()}}

<br/>

## &#127919; 프로젝트 하면서 집중했던 것
- Endpoint RESTful 하게 짜기
- 프로젝트 초기 데이터 모델링
  
<br/>

<hr/>

## &#128218; 팀 프로젝트 자료

### ERD
![BODYLIKE ERD](https://velog.velcdn.com/images/nextlinehappy516/post/041ac237-e0e5-456f-9998-f0837882e96a/image.png)

### TERLLO
![BODYLIKE TRELLO](https://velog.velcdn.com/images/nextlinehappy516/post/e06ffb60-b22e-46bf-8020-f58221f442d8/image.png)

### API 명세서
![BODYLIKE API](https://velog.velcdn.com/images/nextlinehappy516/post/76a07050-23b1-474e-8770-4fb954b0ab6f/image.png)


&#128073; [API 명세서 보러가기](https://docs.google.com/spreadsheets/d/1DuK0H7zI5MEbLEHq-3Y106uThtfh0ihKpdWViosK0UE/edit?usp=sharing)

&#128073; [BODYLIKE 시현영상 보러가기](https://youtu.be/_TEbHw0EREg)

<br/>

<hr/>
