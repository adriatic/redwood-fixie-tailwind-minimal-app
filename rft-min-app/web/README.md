This application consists of the apsolutely minimalistic RedwoodJS TypeScript app created by following the RedwoodJS tutorial up to and including the [Our First page](https://redwoodjs.com/docs/tutorial/chapter1/first-page). 

Start with the page https://redwoodjs.com/docs/tutorial/chapter1/installation, using the TypeScript tab

`yarn create redwood-app --ts ./rft-min-app`

Continue with the sequence:

```
 > cd rft-min-app
 > yarn install
 > yarn rw dev
 ```

 In order to get the home page, which will be used as Tailwind landing page run the command 
 ```
 yarn redwood generate page tw-landing page
 ```

 This will result with the updated `Routes.tsx` page which you have to manually update to set this just added page as a home (landing page)

 <img width="623" alt="image" src="https://github.com/adriatic/fixie-logs/assets/2712405/18d98e37-2628-4141-b8e0-e4f8ff0876f8">