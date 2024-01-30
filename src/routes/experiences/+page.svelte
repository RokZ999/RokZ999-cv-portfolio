<script>
    export let title = 'Automation Software QA Engineer';
    export let company = 'Paurus Group';
    export let period = 'Jul 2022 - Present';
    export let location = 'Ljubljana, Slovenia';
    export let responsibilities = [
      '-> Mentored and onboarded new employees, enhancing team cohesion and productivity.',
      '-> Developed automated tests for Microsoft Dynamics 365, ensuring software quality for major clients.',
      '-> Reduced codebase by 40% by implementing Lombok in Java projects, improving maintainability.',
      '-> Reverse-engineered APIs, leading to a significant reduction in testing time.',
      '-> Enhanced test automation frameworks to boost testing efficiency and support project timelines.'
    ];
    export let skills = ['TestNG', 'Selenium', 'Java'];
  </script>
  
  <div class="card p-4">
    <h2 class="text-2xl font-bold">{title}</h2>
    <p>{company} · {period}</p>
    <p>{location}</p>
    <div class="responsibilities mt-2">
      <article>
        {#each responsibilities as responsibility}
            <p>{responsibility}</p>
        {/each}
        </article>
    </div>
    <div class="skills mt-4">
      <h3 class="font-semibold">Skills:</h3>
      <ul class="flex flex-wrap gap-1">
        {#each skills as skill}
          <li class="btn btn-sm variant-filled">{skill}</li>
        {/each}
      </ul>
    </div>
  </div>
  
