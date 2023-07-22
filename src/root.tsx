import "./global.css";

export default () => {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='./images/favicon-32x32.png'
        />
        <title>Frontend Mentor | QR code component</title>
      </head>
      <body class='py-[85px] px-7 bg-Light-gray'>
        <div class='bg-white rounded-2xl px-4 pt-4'>
          <img
            class='rounded-[9px]'
            src='/public/images/image-qr-code.png'
            height={288}
            width={288}
            alt='qr code'
          />
          <article class='mt-7 text-center leading-4'>
            <h1 class='font-bold text-2xl text-Dark-blue'>
              Improve your front-end skills by building projects
            </h1>
            <p>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </article>
        </div>
        <div class='attribution'>
          Challenge by{" "}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Your Name Here</a>.
        </div>
      </body>
    </>
  );
};
