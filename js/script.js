const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#primary-navigation");
const menuLabel = document.querySelector(".menu-button__label");

if (menuButton && navigation && menuLabel) {
  const setMenuState = (isOpen, shouldReturnFocus = false) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuLabel.textContent = isOpen ? "メニューを閉じる" : "メニューを開く";
    navigation.hidden = !isOpen;
    document.body.classList.toggle("is-menu-open", isOpen);

    if (!isOpen && shouldReturnFocus) {
      menuButton.focus();
    }
  };

  setMenuState(false);

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
      setMenuState(false, true);
    }
  });
}

const typeCheckApp = document.querySelector("#type-check-app");

if (typeCheckApp) {
  const questionView = typeCheckApp.querySelector("[data-question-view]");
  const questionTitle = typeCheckApp.querySelector("#type-check-question");
  const optionsContainer = typeCheckApp.querySelector("[data-options]");
  const progressLabel = typeCheckApp.querySelector("[data-progress-label]");
  const progress = typeCheckApp.querySelector("[data-progress]");
  const progressBar = typeCheckApp.querySelector("[data-progress-bar]");
  const resultView = typeCheckApp.querySelector("[data-result]");
  const resultType = typeCheckApp.querySelector("[data-result-type]");
  const resultHeading = typeCheckApp.querySelector("[data-result-heading]");
  const resultDescription = typeCheckApp.querySelector("[data-result-description]");
  const retryButton = typeCheckApp.querySelector("[data-retry]");

  const questions = [
    {
      question: "朝、服を選ぶときに一番近いのは？",
      options: [
        { label: "とりあえず、いつもの服を選ぶ", type: "TYPE02" },
        { label: "何度か着替えてから決める", type: "TYPE03" },
        { label: "SNSやコーデを見てから考える", type: "TYPE01" },
        { label: "前日にだいたい決めておく", type: "TYPE04" },
      ],
    },
    {
      question: "服を買うとき、一番迷いやすいのは？",
      options: [
        { label: "いつもの形以外を選ぶとき", type: "TYPE02" },
        { label: "自分に似合うかどうか", type: "TYPE01" },
        { label: "手持ちの服と合わせられるか", type: "TYPE03" },
        { label: "本当に着る場面があるか", type: "TYPE04" },
      ],
    },
    {
      question: "SNSや雑誌で素敵なコーデを見たあと、どうなりやすい？",
      options: [
        { label: "見るだけで終わる", type: "TYPE04" },
        { label: "似た服を探すけれど、自分に合うか迷う", type: "TYPE03" },
        { label: "情報を保存しすぎて、結局選べなくなる", type: "TYPE01" },
        { label: "参考にはするけれど、いつもの服に戻る", type: "TYPE02" },
      ],
    },
    {
      question: "クローゼットを見たとき、一番近いのは？",
      options: [
        { label: "服はあるのに、着たい服がない", type: "TYPE01" },
        { label: "似たような服が多い", type: "TYPE02" },
        { label: "買ったけれど着ていない服がある", type: "TYPE03" },
        { label: "何を足せばいいのか分からない", type: "TYPE04" },
      ],
    },
    {
      question: "今、一番変えたいことは？",
      options: [
        { label: "いつもの服以外も選べるようになりたい", type: "TYPE02" },
        { label: "自分に似合う基準を知りたい", type: "TYPE01" },
        { label: "買ってから後悔することを減らしたい", type: "TYPE03" },
        { label: "仕事と休日で服を上手に切り替えたい", type: "TYPE04" },
      ],
    },
  ];

  const results = {
    TYPE01: {
      name: "情報を集めすぎタイプ",
      description:
        "SNSや診断、雑誌などから多くの情報を集めている一方で、「自分の場合はどうすればいい？」が整理できていないかもしれません。",
    },
    TYPE02: {
      name: "いつもの服に戻るタイプ",
      description:
        "失敗したくない気持ちから、安心できる服を繰り返し選んでいる傾向があるかもしれません。",
    },
    TYPE03: {
      name: "買ってから迷うタイプ",
      description:
        "素敵と思って買った服が、手持ち服や日常のシーンとうまくつながっていないことがあるかもしれません。",
    },
    TYPE04: {
      name: "無難に整えすぎタイプ",
      description:
        "使いやすい服は選べている一方で、「嫌いではないけれど、好きとも言い切れない」状態になりやすいかもしれません。",
    },
  };

  const optionLetters = ["A", "B", "C", "D"];
  const selectionDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : 360;
  let currentQuestionIndex = 0;
  let scores = { TYPE01: 0, TYPE02: 0, TYPE03: 0, TYPE04: 0 };
  let answerHistory = [];

  const renderQuestion = (shouldFocus = false) => {
    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const progressValue = questionNumber * 20;

    progressLabel.textContent = `${String(questionNumber).padStart(2, "0")} / 05`;
    progress.setAttribute("aria-valuenow", String(progressValue));
    progress.setAttribute("aria-valuetext", `${questionNumber}問目 / 全5問`);
    progressBar.style.width = `${progressValue}%`;
    questionTitle.textContent = currentQuestion.question;
    optionsContainer.replaceChildren();

    currentQuestion.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      const letter = document.createElement("span");
      const text = document.createElement("span");
      const check = document.createElement("span");

      button.className = "type-check__option";
      button.type = "button";
      button.dataset.type = option.type;
      button.setAttribute("aria-pressed", "false");

      letter.className = "type-check__option-letter";
      letter.setAttribute("aria-hidden", "true");
      letter.textContent = `${optionLetters[optionIndex]}.`;

      text.className = "type-check__option-text";
      text.textContent = option.label;

      check.className = "type-check__option-check";
      check.setAttribute("aria-hidden", "true");
      check.textContent = "✓";

      button.append(letter, text, check);
      optionsContainer.append(button);
    });

    if (shouldFocus) {
      questionTitle.focus({ preventScroll: true });
    }
  };

  const determineResultType = () => {
    const highestScore = Math.max(...Object.values(scores));
    const highestTypes = Object.keys(scores).filter((type) => scores[type] === highestScore);

    if (highestTypes.length > 1) {
      const latestHighestType = [...answerHistory]
        .reverse()
        .find((type) => highestTypes.includes(type));

      if (latestHighestType) {
        return latestHighestType;
      }
    }

    return highestTypes[0];
  };

  const showResult = () => {
    const selectedType = determineResultType();
    const selectedResult = results[selectedType];

    resultType.textContent = selectedType.replace("TYPE", "TYPE ");
    resultHeading.textContent = `今のあなたは、「${selectedResult.name}」の傾向があるかもしれません。`;
    resultDescription.textContent = selectedResult.description;
    questionView.hidden = true;
    resultView.hidden = false;
    resultHeading.focus({ preventScroll: true });
  };

  optionsContainer.addEventListener("click", (event) => {
    const selectedButton =
      event.target instanceof Element
        ? event.target.closest("button[data-type]")
        : null;

    if (!selectedButton || selectedButton.disabled) {
      return;
    }

    const selectedType = selectedButton.dataset.type;
    const optionButtons = optionsContainer.querySelectorAll("button[data-type]");

    scores[selectedType] += 1;
    answerHistory.push(selectedType);
    selectedButton.classList.add("is-selected");
    selectedButton.setAttribute("aria-pressed", "true");
    optionButtons.forEach((button) => {
      button.disabled = true;
    });

    window.setTimeout(() => {
      if (currentQuestionIndex === questions.length - 1) {
        showResult();
        return;
      }

      currentQuestionIndex += 1;
      renderQuestion(true);
    }, selectionDelay);
  });

  retryButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    scores = { TYPE01: 0, TYPE02: 0, TYPE03: 0, TYPE04: 0 };
    answerHistory = [];
    resultView.hidden = true;
    questionView.hidden = false;
    renderQuestion(true);
  });

  typeCheckApp.hidden = false;
  renderQuestion();
}

const stylingSimulation = document.querySelector("[data-simulation-app]");

if (stylingSimulation) {
  const imageDirectory = "assets/images/photos/simulation/";
  const defaultState = { scene: "off", mood: "fresh", base: "skirt" };
  const validValues = {
    scene: ["work", "off", "dinner"],
    mood: ["clean", "soft", "fresh"],
    base: ["pants", "skirt"],
  };
  const sceneCopy = {
    work: {
      lead: "仕事に必要なきちんと感を保ちながら",
      reason: "仕事の日に使いやすい端正さを土台に、",
    },
    off: {
      lead: "休日らしい自然な力の抜け方を残しながら",
      reason: "休日の過ごしやすさを大切にしながら、",
    },
    dinner: {
      lead: "日常の延長にある少し特別な予定へ",
      reason: "食事の場に合う上品さを土台に、",
    },
  };
  const moodCopy = {
    clean: {
      note: "線と色数を整えた",
      reason: "シルエットと色をすっきり整えています。",
    },
    soft: {
      note: "素材と色に穏やかさを加えた",
      reason: "やわらかな素材感と落ち着いた色を取り入れています。",
    },
    fresh: {
      note: "軽やかな色で新鮮さを加えた",
      reason: "明るい色と抜け感のあるラインで軽やかさを作っています。",
    },
  };
  const baseCopy = {
    pants: "パンツ",
    skirt: "スカート",
  };
  const imageDimensions = {
    "simulation_work-soft-pants.webp": [1086, 1448],
    "simulation_work-fresh-pants.webp": [1086, 1448],
    "simulation_off-clean-pants.webp": [1086, 1448],
    "simulation_off-soft-pants.webp": [1086, 1448],
    "simulation_dinner-clean-pants.webp": [1086, 1448],
    "simulation_dinner-soft-pants.webp": [1086, 1448],
    "simulation_dinner-soft-skirt.webp": [1049, 1499],
  };

  const groups = Array.from(
    stylingSimulation.querySelectorAll("[data-simulation-group]"),
  );
  const result = stylingSimulation.querySelector("[data-simulation-result]");
  const resultImage = stylingSimulation.querySelector("[data-simulation-image]");
  const resultName = stylingSimulation.querySelector("[data-simulation-name]");
  const resultNote = stylingSimulation.querySelector("[data-simulation-note]");
  const resultReason = stylingSimulation.querySelector("[data-simulation-reason]");

  const state = { ...defaultState };
  let resultUpdateId = 0;

  const createStyleDetails = () => {
    const fileName = `simulation_${state.scene}-${state.mood}-${state.base}.webp`;
    const [width, height] = imageDimensions[fileName] ?? [1122, 1402];
    const displayName = `${state.scene.toUpperCase()} × ${state.mood.toUpperCase()} × ${state.base.toUpperCase()}`;

    return {
      image: `${imageDirectory}${fileName}`,
      width,
      height,
      displayName,
      alt: `${state.scene.toUpperCase()} / ${state.mood.toUpperCase()} / ${state.base.toUpperCase()} のスタイリング例`,
      note: `${sceneCopy[state.scene].lead}、${moodCopy[state.mood].note}${baseCopy[state.base]}スタイル。`,
      reason: `${sceneCopy[state.scene].reason}${moodCopy[state.mood].reason}`,
    };
  };

  const applyStyleDetails = (styleDetails) => {
    resultImage.src = styleDetails.image;
    resultImage.width = styleDetails.width;
    resultImage.height = styleDetails.height;
    resultImage.alt = styleDetails.alt;
    resultName.textContent = styleDetails.displayName;
    resultNote.textContent = styleDetails.note;
    resultReason.textContent = styleDetails.reason;
  };

  const updateResult = (shouldPreload = true) => {
    const styleDetails = createStyleDetails();
    const currentUpdateId = ++resultUpdateId;

    if (!shouldPreload || resultImage.getAttribute("src") === styleDetails.image) {
      applyStyleDetails(styleDetails);
      result.classList.remove("is-updating");
      return;
    }

    const preloadImage = new Image();
    result.classList.add("is-updating");

    preloadImage.addEventListener(
      "load",
      () => {
        if (currentUpdateId !== resultUpdateId) {
          return;
        }

        applyStyleDetails(styleDetails);
        result.classList.remove("is-updating");
      },
      { once: true },
    );

    preloadImage.addEventListener(
      "error",
      () => {
        if (currentUpdateId !== resultUpdateId) {
          return;
        }

        console.warn(`Styling Simulation画像を読み込めませんでした: ${styleDetails.image}`);
        result.classList.remove("is-updating");
      },
      { once: true },
    );

    preloadImage.src = styleDetails.image;
  };

  const updateSelectedButton = (groupName, selectedValue) => {
    stylingSimulation
      .querySelectorAll(`button[data-group="${groupName}"]`)
      .forEach((button) => {
        const isSelected = button.dataset.value === selectedValue;
        button.classList.toggle("is-active", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
      });
  };

  groups.forEach((group) => {
    const groupName = group.dataset.simulationGroup;
    const activeButton = group.querySelector(
      'button.is-active[data-value], button[aria-pressed="true"][data-value]',
    );
    const activeValue = activeButton?.dataset.value;

    if (validValues[groupName]?.includes(activeValue)) {
      state[groupName] = activeValue;
    }

    group.querySelectorAll("button[data-group][data-value]").forEach((button) => {
      button.disabled = false;
    });

    updateSelectedButton(groupName, state[groupName]);
  });

  stylingSimulation.addEventListener("click", (event) => {
    const selectedButton =
      event.target instanceof Element
        ? event.target.closest("button[data-group][data-value]")
        : null;

    if (!selectedButton || !stylingSimulation.contains(selectedButton)) {
      return;
    }

    const groupName = selectedButton.dataset.group;
    const selectedValue = selectedButton.dataset.value;

    if (!validValues[groupName]?.includes(selectedValue)) {
      console.warn(
        `Styling Simulationの選択値が不正です: ${groupName}=${selectedValue}`,
      );
      return;
    }

    state[groupName] = selectedValue;
    updateSelectedButton(groupName, selectedValue);
    updateResult();
  });

  updateResult(false);
}

/* ========================================
   FAQ Accordion
======================================== */

const faq = document.querySelector("[data-faq]");

if (faq) {
  const faqTriggers = faq.querySelectorAll(".faq__trigger[aria-controls]");

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const answerId = trigger.getAttribute("aria-controls");
      const answer = answerId ? document.getElementById(answerId) : null;

      if (!answer || !faq.contains(answer)) {
        return;
      }

      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      trigger.setAttribute("aria-expanded", String(!isOpen));
      answer.hidden = isOpen;
    });
  });
}

/* ========================================
   Reservation Form
======================================== */

const validateReservationValues = ({
  name,
  email,
  date,
  minDate,
  time,
  method,
  agreement,
}) => {
  const validationErrors = {};
  const normalizedName = name.trim();
  const normalizedEmail = email.trim();

  if (!normalizedName) {
    validationErrors.name = "required";
  }

  if (!normalizedEmail) {
    validationErrors.email = "required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    validationErrors.email = "format";
  }

  if (!date || date < minDate) {
    validationErrors.date = "required";
  }

  if (!time) {
    validationErrors.time = "required";
  }

  if (!method) {
    validationErrors.method = "required";
  }

  if (!agreement) {
    validationErrors.agreement = "required";
  }

  return validationErrors;
};

const reservationForm = document.querySelector("#reservation-form");
const reservationSubmit = document.querySelector("[data-reservation-submit]");
const reservationComplete = document.querySelector("#reservation-complete");

if (reservationForm && reservationSubmit && reservationComplete) {
  const nameField = reservationForm.querySelector("#reservation-name");
  const emailField = reservationForm.querySelector("#reservation-email");
  const dateField = reservationForm.querySelector("#reservation-date");
  const timeField = reservationForm.querySelector("#reservation-time");
  const methodFieldset = reservationForm.querySelector(".reservation__fieldset");
  const methodFields = Array.from(
    reservationForm.querySelectorAll('input[name="method"]'),
  );
  const agreementField = reservationForm.querySelector("#reservation-agreement");

  const errors = {
    name: reservationForm.querySelector("#reservation-name-error"),
    email: reservationForm.querySelector("#reservation-email-error"),
    date: reservationForm.querySelector("#reservation-date-error"),
    time: reservationForm.querySelector("#reservation-time-error"),
    method: reservationForm.querySelector("#reservation-method-error"),
    agreement: reservationForm.querySelector("#reservation-agreement-error"),
  };

  const requiredElements = [
    nameField,
    emailField,
    dateField,
    timeField,
    methodFieldset,
    agreementField,
    ...methodFields,
    ...Object.values(errors),
  ];

  if (requiredElements.every(Boolean)) {
    const padDatePart = (value) => String(value).padStart(2, "0");
    const today = new Date();
    const todayValue = [
      today.getFullYear(),
      padDatePart(today.getMonth() + 1),
      padDatePart(today.getDate()),
    ].join("-");

    dateField.min = todayValue;

    const updateError = (fields, error, isInvalid, message) => {
      const targetFields = Array.isArray(fields) ? fields : [fields];

      targetFields.forEach((field) => {
        field.setAttribute("aria-invalid", String(isInvalid));
      });

      if (message) {
        error.textContent = message;
      }

      error.hidden = !isInvalid;
    };

    const clearAllErrors = () => {
      updateError(nameField, errors.name, false);
      updateError(emailField, errors.email, false);
      updateError(dateField, errors.date, false);
      updateError(timeField, errors.time, false);
      updateError([methodFieldset, ...methodFields], errors.method, false);
      updateError(agreementField, errors.agreement, false);
    };

    const requestValidation = () => {
      reservationForm.requestSubmit();
    };

    reservationSubmit.addEventListener("click", requestValidation);

    reservationForm.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || event.isComposing) {
        return;
      }

      const target = event.target;
      const acceptsLineBreak = target instanceof HTMLTextAreaElement;
      const isChoice =
        target instanceof HTMLInputElement &&
        ["radio", "checkbox"].includes(target.type);
      const isSelect = target instanceof HTMLSelectElement;

      if (acceptsLineBreak || isChoice || isSelect) {
        return;
      }

      event.preventDefault();
      requestValidation();
    });

    nameField.addEventListener("input", () => {
      updateError(nameField, errors.name, false);
    });

    emailField.addEventListener("input", () => {
      updateError(emailField, errors.email, false);
    });

    dateField.addEventListener("change", () => {
      updateError(dateField, errors.date, false);
    });

    timeField.addEventListener("change", () => {
      updateError(timeField, errors.time, false);
    });

    methodFields.forEach((field) => {
      field.addEventListener("change", () => {
        updateError([methodFieldset, ...methodFields], errors.method, false);
      });
    });

    agreementField.addEventListener("change", () => {
      updateError(agreementField, errors.agreement, false);
    });

    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      clearAllErrors();

      const invalidFields = [];
      const nameValue = nameField.value.trim();
      const emailValue = emailField.value.trim();
      const selectedMethod = methodFields.find((field) => field.checked);
      const validationErrors = validateReservationValues({
        name: nameValue,
        email: emailValue,
        date: dateField.value,
        minDate: dateField.min,
        time: timeField.value,
        method: selectedMethod?.value ?? "",
        agreement: agreementField.checked,
      });

      if (validationErrors.name) {
        updateError(nameField, errors.name, true);
        invalidFields.push(nameField);
      }

      if (validationErrors.email === "required") {
        updateError(
          emailField,
          errors.email,
          true,
          "メールアドレスを入力してください。",
        );
        invalidFields.push(emailField);
      } else if (validationErrors.email === "format") {
        updateError(
          emailField,
          errors.email,
          true,
          "メールアドレスを正しい形式で入力してください。",
        );
        invalidFields.push(emailField);
      }

      if (validationErrors.date) {
        updateError(dateField, errors.date, true);
        invalidFields.push(dateField);
      }

      if (validationErrors.time) {
        updateError(timeField, errors.time, true);
        invalidFields.push(timeField);
      }

      if (validationErrors.method) {
        updateError([methodFieldset, ...methodFields], errors.method, true);
        invalidFields.push(methodFields[0]);
      }

      if (validationErrors.agreement) {
        updateError(agreementField, errors.agreement, true);
        invalidFields.push(agreementField);
      }

      if (invalidFields.length > 0) {
        invalidFields[0].focus();
        return;
      }

      reservationForm.reset();
      reservationForm.hidden = true;
      reservationComplete.hidden = false;
      reservationComplete.focus();
    });
  }
}
