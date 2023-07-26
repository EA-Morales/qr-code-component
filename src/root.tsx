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
      <body class='pt-[85px] sm:pt-[151px] px-7 min-h-screen bg-Light-gray'>
        <div class='bg-white mx-auto rounded-2xl px-4 pt-4 max-w-[320px]'>
          <img
            class='rounded-[9px]'
            src='/public/images/image-qr-code.png'
            height={288}
            width={288}
            alt='qr code'
          />
          <article class='mt-7 text-center leading-4 p-2 pb-10'>
            <h1 class='font-bold text-2xl text-Dark-blue mb-5'>
              Improve your front-end skills by building projects
            </h1>
            <p class='text-Grayish-blue text-lg'>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </article>
        </div>
        <div class='bottom-0 text-sm text-center mt-5'>
          Challenge by{" "}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded with 💖 by{" "}
          <a
            target='_blank'
            href='https://www.frontendmentor.io/profile/EA-Morales'>
            L3GOL4S
          </a>
          .
        </div>
      </body>
    </>
  );
};
